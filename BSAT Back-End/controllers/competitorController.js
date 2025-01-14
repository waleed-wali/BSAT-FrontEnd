import axios from 'axios';

export const getCompetitorAnalysis = async (req, res) => {
  const { domain, category } = req.body;

  if (!domain || !category) {
    return res.status(400).json({ error: 'Both domain and category are required' });
  }

  try {
    // Refined GPT API prompt with more specific output instructions
    const prompt = `
      Analyze the domain (if available on google then provide results otherwise no) "${domain}" in the category "${category}" and identify potential competitors only 9. It should be atleast 10. and also top keywords should be atleast 15.
      Provide ONLY a valid JSON response with the following structure:
      {
        "competitors": [
          { "domain": "competitor1.com", "domainAuthority": 85 },
          { "domain": "competitor2.com", "domainAuthority": 78 },
          { "domain": "competitor3.com", "domainAuthority": 67 }
        ],
        "topKeywords": [
          { "keyword": "example keyword 1" },
          { "keyword": "example keyword 2" },
          { "keyword": "example keyword 3" }
        ]
      }
      Do NOT include any explanations, commentary, or extra text other than the JSON.
    `;

    // Make the request to GPT API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are an AI that provides competitor analysis.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV`, // Replace with your GPT API key
          'Content-Type': 'application/json'
        }
      }
    );

    // Ensure the response content is a valid JSON string
    const gptResponse = response.data.choices[0].message.content.trim();

    try {
      // Attempt to parse the JSON
      const competitorData = JSON.parse(gptResponse);

      // Send the parsed JSON back to the frontend
      res.json({
        topCompetitors: competitorData.competitors,
        topKeywords: competitorData.topKeywords
      });
    } catch (jsonError) {
      // If the JSON parsing fails, return an error message
      console.error('JSON parsing error:', jsonError.message);
      res.status(500).json({ error: 'Invalid JSON format returned by BSAT' });
    }

  } catch (error) {
    console.error('Error fetching competitor analysis:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch competitor analysis' });
  }
};




// sk-ay2uS16j6qg5TbfiqClRQF1IGdhhi78-sbWSpf2WcWT3BlbkFJcJlrBUfXBFDGJVh50pCh1QPJ67U-25Skh-INTUcO8A