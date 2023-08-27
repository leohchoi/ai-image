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

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });

  } catch (error) {
    console.log(error);
    res.status(error.response.status).send(error?.response.data.error.message);
  }
});

export default router;