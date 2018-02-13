import { Router } from 'express';
import { getPurchases } from './controller'

const router = Router();

router.route('/')
  .get(getPurchases)

export default router;
