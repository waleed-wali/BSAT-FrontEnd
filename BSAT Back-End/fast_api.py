from flask import Flask, request, jsonify, send_file
import numpy as np
import cv2
import tempfile
import os

from QualityScaler import AI
 
app = Flask(__name__)

# Assuming 'AI' class has been defined in the same script or imported appropriately
ai_processor = AI(AI_model_name="RealESRGANx4", half_precision=False, directml_gpu="GPU 1", resize_factor=4,
                  max_resolution=2048)


@app.route('/upscale-image', methods=['POST'])
def upscale_image():
    file = request.files['image']
    if not file:
        return jsonify({"error": "No file provided."}), 400

    # Read the image file
    img_array = np.fromstring(file.read(), np.uint8)
    img = cv2.imdecode(img_array, cv2.IMREAD_UNCHANGED)

    # Process the image
    upscaled_image = ai_processor.AI_orchestration(img)

    # Save the upscaled image to a temporary file
    _, temp_file_path = tempfile.mkstemp(suffix='.png')
    cv2.imwrite(temp_file_path, upscaled_image)

    # Corrected send_file usage
    return send_file(
        temp_file_path,
        mimetype='image/png',
        as_attachment=True,
        download_name='upscaled.png'
    )


@app.route('/upscale-video', methods=['POST'])
def upscale_video():
    file = request.files['video']
    if not file:
        return jsonify({"error": "No file provided."}), 400

    # Save the video to a temporary file
    _, video_file_path = tempfile.mkstemp(suffix='.mp4')
    file.save(video_file_path)

    # Process the video
    upscaled_video_path = video_file_path.replace('.mp4', '_upscaled.mp4')
    # Assuming video upscaling is handled properly within AI class
    ai_processor.AI_upscale_video(video_file_path, upscaled_video_path)

    return send_file(upscaled_video_path, mimetype='video/mp4', as_attachment=True, attachment_filename='upscaled.mp4')


if __name__ == "__main__":
    app.run(debug=True)
