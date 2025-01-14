
import path from "path";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";
const API_KEY = "db27b566-868b-4e1c-a4bf-97e54ceb946a";

const COLORIZER_URL = 'https://api.deepai.org/api/colorizer';
const ENHANCER_URL = 'https://api.deepai.org/api/torch-srgan';
const ZOOM_OUT_URL = 'https://api.deepai.org/api/zoom-out';

const postImageToApi = async (imagePath, apiUrl) => {
  console.log("file path is : ", apiUrl);
  console.log("image is ; ", imagePath);
  const formData = new FormData();

  formData.append('image', fs.createReadStream(imagePath));

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'api-key': API_KEY,
        ...formData.getHeaders(), 
      },
    });

    if (response.status === 200) {
      return response.data.output_url;
    } else {
      throw new Error('Failed to process image');
    }
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};

export const enhanceIamge =async (req, res) =>{
    // async (req, res) => {
      console.log("req.file is ; ", req.file);
          if (!req.file) {
            return res.status(400).send('No file uploaded.');
          }

          const __dirname = await path.resolve();

          const filePath = await path.join(__dirname, 'uploads', req.file.filename);
        
          const { processingType } = req.body;
            const imagePath = filePath;

            console.log("image path i s;", imagePath);
          let apiUrl;
        
          switch (processingType) {
            case 'colorize':
              apiUrl = COLORIZER_URL;
              break;
            case 'enhance':
              apiUrl = ENHANCER_URL;
              break;
            case 'zoomOut':
              apiUrl = ZOOM_OUT_URL;
              break;
            default:
              return res.status(400).send('Invalid processing type.');
          }
        
          try {
            const outputUrl = await postImageToApi(imagePath, apiUrl);
        
            res.send(outputUrl);
        
            fs.unlinkSync(imagePath); 
          } catch (error) {
            res.status(500).send('Error processing image.');
          }
        // }
}