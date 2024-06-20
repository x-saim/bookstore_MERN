import express from 'express';
import { PORT } from './config.js';

const app = express();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

// Routes

app.get('/', (request, response) => {
  return response.status(234).send('Welcome to MERN Stack Tutorial');
});
