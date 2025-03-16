const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const getChatResponse = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received Message:", message);

    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); 
    const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: message }] }] });

    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error("Google Gemini API Error:", error);
    res.status(500).json({ error: "Error processing request", details: error.message });
  }
};

module.exports = { getChatResponse };
