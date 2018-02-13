import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import apiPurchaseRouter from './api/purchases/router';
import db from './db/index';

const app = express();

app.use('/api/purchases', [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  apiPurchaseRouter
]);

if(process.env.NODE_ENV !== 'test') {
  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  app.use('/', express.static(path.join(__dirname, '../build')));
}

export default app;
