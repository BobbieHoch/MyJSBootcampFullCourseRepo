require('dotenv').config();

import express, { Application } from 'express';
import { peopleRouter } from './routes/product-route';

const app:Application = express();

//whatever port makes sense for you
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/people', peopleRouter);

app.set("port", port);

export default app;