import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router(); // defining routes for express applications

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}); // creating an instance of openAI

router.route('/').get((req, res) => {
  res.send('hello');
});


router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    console.log(aiResponse);
    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error?.message });
  }
});

export default router;