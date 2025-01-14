from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
import numpy as np
import cv2
import tempfile
import uvicorn
from QualityScaler import AI
import os
from moviepy.editor import VideoFileClip, ImageSequenceClip

app = FastAPI()

ai_processor = AI(AI_model_name="RealESRGANx4", half_precision=False, directml_gpu="GPU 1", resize_factor=2,
                  max_resolution=2048)

@app.post("/upscale-image")
async def upscale_image(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file provided.")

    try:
        # Create a temporary directory to store the uploaded and processed images
        temp_dir = tempfile.mkdtemp()

        # Save the uploaded image to the temporary directory
        input_file_path = os.path.join(temp_dir, file.filename)
        with open(input_file_path, 'wb') as f:
            f.write(await file.read())

        # Read the image file
        img = cv2.imread(input_file_path, cv2.IMREAD_UNCHANGED)

        # Process the image
        upscaled_image = ai_processor.AI_orchestration(img)

        # Save the upscaled image to the same directory
        output_file_path = os.path.join(temp_dir, f"upscaled_{file.filename}")
        cv2.imwrite(output_file_path, upscaled_image)

        return FileResponse(
            output_file_path,
            media_type='image/png',
            filename=f"upscaled_{file.filename}"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during image processing: {str(e)}")

@app.post("/upscale-video")
async def upscale_video(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file provided.")

    try:
        # Create a temporary directory to store the uploaded and processed videos
        temp_dir = tempfile.mkdtemp()

        # Save the uploaded video to the temporary directory
        input_file_path = os.path.join(temp_dir, file.filename)
        with open(input_file_path, 'wb') as f:
            f.write(await file.read())

        # Process the video
        video_output_path = await process_video(input_file_path, temp_dir, file.filename)

        return FileResponse(
            video_output_path,
            media_type='video/mp4',
            filename=f"upscaled_{file.filename}"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during video processing: {str(e)}")

async def process_video(input_file_path: str, temp_dir: str, original_filename: str) -> str:
    try:
        # Extract frames and audio
        frames_dir = os.path.join(temp_dir, "frames")
        os.makedirs(frames_dir, exist_ok=True)

        video_clip = VideoFileClip(input_file_path)
        fps = video_clip.fps
        frames = list(video_clip.iter_frames())
        frame_paths = []

        for i, frame in enumerate(frames):
            frame_path = os.path.join(frames_dir, f"frame_{i:04d}.png")
            cv2.imwrite(frame_path, frame)
            frame_paths.append(frame_path)

        # Process frames
        upscaled_frames_dir = os.path.join(temp_dir, "upscaled_frames")
        os.makedirs(upscaled_frames_dir, exist_ok=True)
        upscaled_frame_paths = []

        for frame_path in frame_paths:
            img = cv2.imread(frame_path, cv2.IMREAD_UNCHANGED)
            upscaled_img = ai_processor.AI_orchestration(img)
            upscaled_frame_path = os.path.join(upscaled_frames_dir, os.path.basename(frame_path))
            cv2.imwrite(upscaled_frame_path, upscaled_img)
            upscaled_frame_paths.append(upscaled_frame_path)

        # Reconstruct video
        upscaled_clip = ImageSequenceClip(upscaled_frame_paths, fps=fps)
        audio_path = os.path.join(temp_dir, "audio.mp3")
        video_clip.audio.write_audiofile(audio_path)
        upscaled_clip = upscaled_clip.set_audio(audio_path)
        output_file_path = os.path.join(temp_dir, f"upscaled_{original_filename}")
        upscaled_clip.write_videofile(output_file_path, codec='libx264')

        return output_file_path

    except MemoryError as e:
        raise HTTPException(status_code=500, detail="MemoryError: Not enough memory resources are available to complete this operation.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during video processing: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
