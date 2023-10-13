import express from 'express';
import {
  addPayment,
  deletePayment,
  getPayment,
  getPayments,
  updatePayment,
} from '../controllers/payments.js';

const router = express.Router();

router.get('/', getPayments);
router.get('/:id', getPayment);
router.post('/', addPayment);
router.delete('/:id', deletePayment);
router.put('/', updatePayment);

export default router;
