import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { routeIndex } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', routeIndex);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
});
