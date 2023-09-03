import express from 'express';
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();
router.post('/create', addUser);
router.get('/', getAllUsers);
router.get('/single-user', getUserById);
router.put('/update', updateUser);
router.delete('/delete-user/:id', deleteUser);

export default router;
