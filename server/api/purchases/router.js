import { Router } from 'express';
import { getPurchases, addPurchase} from './controller'

const router = Router();

router.route('/')
  .get(getPurchases)
  .post(addPurchase)

export default router;
