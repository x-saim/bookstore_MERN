import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

// Connect DB

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database.');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Routes

app.get('/', (request, response) => {
  return response.status(234).send('Welcome to MERN Stack Tutorial');
});
