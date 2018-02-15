import { Router } from 'express';
import { getPurchases, addPurchase, updatePurchase } from './controller'

const router = Router();

router.route('/')
  .get(getPurchases)
  .post(addPurchase);

router.route('/:id')
  .put(updatePurchase);

export default router;
