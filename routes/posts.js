import express from 'express';
import {
  addPost,
  getPosts,
  updatePost,
  deletePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', addPost);
router.delete('/:id', deletePost);
router.put('/', updatePost);

export default router;
