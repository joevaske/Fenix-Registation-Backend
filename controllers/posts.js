import { db } from '../db.js';

export const getPosts = (req, res) => {
  const q = 'SELECT * FROM posts ORDER BY post_id DESC';
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

export const addPost = (req, res) => {
  const post_author = req.body.post_author;
  const post_date = req.body.post_date;
  const post_content = req.body.post_content;
  const post_title = req.body.post_title;
  const post_status = req.body.post_status;
  const post_type = req.body.post_type;
  const post_image = req.body.post_image;
  const post_to = req.body.post_to;

  const q =
    'INSERT into posts (post_author, post_date, post_content, post_title, post_status, post_type, post_image, post_to) VALUES(?)';

  const values = [
    post_author,
    post_date,
    post_content,
    post_title,
    post_status,
    post_type,
    post_image,
    post_to,
  ];

  db.query(q, [values], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.send(result);
    }
  });
};

export const updatePost = (req, res) => {
  const id = req.body.post_id;
  const post_author = req.body.post_author;
  const post_date = req.body.post_date;
  const post_content = req.body.post_content;
  const post_title = req.body.post_title;
  const post_status = req.body.post_status;
  const post_type = req.body.post_type;
  const post_image = req.body.post_image;
  const post_to = req.body.post_to;

  const q = 'UPDATE posts SET ? WHERE post_id = ?';

  const post = {
    post_author,
    post_date,
    post_content,
    post_title,
    post_status,
    post_type,
    post_image,
    post_to,
  };

  db.query(q, [post, id], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.send(result);
    }
  });
};

export const deletePost = (req, res) => {
  const id = req.params.id;
  const q = 'DELETE FROM posts WHERE post_id = ?';
  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
