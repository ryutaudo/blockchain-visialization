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

// app.get('/api/purchase', async (res, req) => {
//   try {
//     const purchases = await db.select().table('purchases');
//     res.send(purchases);
//   } catch(err) {
//     console.erro('Error loading purchases!', err);
//     res.send(500, 'internal server error');
//   }
// });
