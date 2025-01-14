// scraper.js
const axios = require('axios');      // Import axios
const cheerio = require('cheerio');  // Import cheerio for scraping

// Function to scrape the first 10 article links from a website
const scrapeArticles = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    // Updated selector based on urdupoint.com structure
    // Adjusted to target article links accurately
    $('.title a').each((index, element) => {
      if (index < 10) {
        const articleUrl = $(element).attr('href');
        if (articleUrl) {
          articles.push(articleUrl);
        }
      }
    });

    // If articles array is empty, it means no articles were found
    if (articles.length === 0) {
      console.error('No articles found on the website.');
    }

    return articles;
  } catch (error) {
    console.error('Error scraping articles:', error.message);
    return [];
  }
};

module.exports = scrapeArticles;  // Export the scraping function
