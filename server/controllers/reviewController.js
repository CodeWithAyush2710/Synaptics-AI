const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.reviewCode = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, message: 'Code is required' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(`Review the following code:

${code}`);
    const response = await result.response;
    const text = response.text();

    res.json({ success: true, review: text });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};