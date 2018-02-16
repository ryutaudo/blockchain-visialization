import { Router } from 'express';
import { getPurchases, addPurchase, updatePurchase, deletePurchase } from './controller'

const router = Router();

router.route('/')
  .get(getPurchases)
  .post(addPurchase);

router.route('/:id')
  .put(updatePurchase)
  .delete(deletePurchase)

export default router;
