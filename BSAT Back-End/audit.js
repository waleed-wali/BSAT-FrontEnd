// audit.js
const axios = require('axios');      // Import axios
const dotenv = require('dotenv');    // Import dotenv for environment variables

// Initialize environment variables
dotenv.config();

// Function to generate the audit report using GPT API
const generateAuditReport = async (url, articles) => {
  try {
    // Construct the prompt for GPT model to perform a detailed website audit
    const prompt = `
      You are tasked with providing a personalized, detailed website audit based on the following articles from ${url}:

      Articles:
      ${articles.join('\n')}

      Your audit should cover the following areas, providing specific data, mistakes, and actionable improvements for each aspect:

      1. **Technical SEO**:
         - **Crawlability and Indexing**
         - **Mobile-Friendliness**
         - **Site Speed and Performance**
         - **HTTPS and Security**

         **Mistakes**: List specific technical SEO mistakes, such as missing meta tags or unoptimized resources.
         **Improvements**: Suggest actionable improvements to address these issues.

      2. **On-Page SEO**:
         - **Keyword Optimization**
         - **Meta Tags**
         - **Header Tags**
         - **Image Optimization**
         - **Content Quality**

         **Mistakes**: Identify specific on-page SEO mistakes, such as missing or poorly written meta tags.
         **Improvements**: Suggest actionable changes for better keyword optimization, meta tags, and content quality.

      3. **User Experience**:
         - **Navigation and Usability**
         - **Design and Aesthetics**
         - **Accessibility**

         **Mistakes**: List specific user experience mistakes that hinder usability.
         **Improvements**: Recommend changes to enhance navigation, design, and accessibility.

      4. **Performance Audit**:
         - **Load Times**
         - **Server Response Time**
         - **Resource Optimization**

         **Mistakes**: Identify performance-related mistakes that slow down the website.
         **Improvements**: Suggest actionable improvements to optimize load times and resource usage.

      5. **Analytics and Conversion Audit**:
         - **Analytics Setup**
         - **Goal Tracking**

         **Mistakes**: Identify any mistakes in analytics setup that could affect data tracking.
         **Improvements**: Recommend necessary actions to ensure proper analytics tracking and goal setup.

      For each of these areas, please provide clear, personalized recommendations based on the specific issues identified during the audit. Your response should focus on actionable items that can be implemented to improve the overall performance, SEO, and user experience of the website.
    `;

    // Call OpenAI API to generate the detailed audit report
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are an expert in website auditing and SEO optimization.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    // Get the generated audit report from GPT API response
    const auditReport = gptResponse.data.choices[0].message.content.trim();
    return auditReport;

  } catch (error) {
    console.error('Error generating audit report:', error.response ? error.response.data : error.message);
    throw error;  // Rethrow the error for handling in the main server file
  }
};

module.exports = generateAuditReport;  // Export the function
