import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();
// This line uses the dotenv library to load environment variables 
// from a file named .env into the Node.js process environment. This is often used to store configuration settings, API keys, 
// and sensitive information separate from your code.

const app = express(); // initialize express application
app.use(cors()); // use cors middleware, helps manage cors-related issues by setting appropriate headers in http resposne
app.use(express.json({ limit: '50mb' })); //  adds middleware to parse incoming hson data in http requests, sets limit on json payload
app.use('api/v1/post', postRoutes); // adding this and one below as middleware to create api endpoints so we can connect backend to frontend with those routes
app.use('api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
  res.send('Hello from DALLE');
});
// p much server will respond w that text whenever homepage is visited

const startServer = async () => {

  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => { // your port number
      console.log(`server started on port 8080`)
  });
  } catch (errror) {
    console.log(error);
  }

};

startServer();