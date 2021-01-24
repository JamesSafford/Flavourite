import express from 'express';
import api from './api.mjs';
import cors from 'cors';

const app = express();

app.use(cors())

app.use('/api', api);

app.listen(process.env.PORT || 3001);
