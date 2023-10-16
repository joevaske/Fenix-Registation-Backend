import { db } from '../db.js';

export const addUser = (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const image = req.body.image;
  const street = req.body.street;
  const street_nr = req.body.street_nr;
  const post_nr = req.body.post_nr;
  const living_place = req.body.living_place;
  const pid = req.body.pid;
  const birth_date = req.body.birth_date;
  const access_date = req.body.access_date;
  const role = req.body.role;
  const status = req.body.status;
  const password = req.body.password;

  const q =
    'INSERT INTO users (user_fname, user_lname,  user_email, user_image, user_street, user_street_nr, user_post_nr, user_living_place, user_pid, user_birth_date, user_access_date, user_role, user_status, user_password) VALUES (?)';
  const values = [
    fname,
    lname,
    email,
    image,
    street,
    street_nr,
    post_nr,
    living_place,
    pid,
    birth_date,
    access_date,
    role,
    status,
    password,
  ];
  db.query(q, [values], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
export const getAllUsers = (req, res) => {
  const q = 'SELECT * FROM users ORDER BY user_id DESC';
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

export const getUserById = (req, res) => {
  const id = req.query.id;
  const q = 'SELECT * FROM users WHERE user_id = ?';
  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

export const updateUser = (req, res) => {
  const id = req.body.id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const image = req.body.image;
  const street = req.body.street;
  const street_nr = req.body.street_nr;
  const post_nr = req.body.post_nr;
  const living_place = req.body.living_place;
  const pid = req.body.pid;
  const birth_date = req.body.birth_date;
  const access_date = req.body.access_date;
  const role = req.body.role;
  const status = req.body.status;
  const password = req.body.password;

  const q = 'UPDATE users SET ? WHERE user_id = ?';

  const user = {
    user_fname: fname,
    user_lname: lname,
    user_email: email,
    user_image: image,
    user_street: street,
    user_street_nr: street_nr,
    user_post_nr: post_nr,
    user_living_place: living_place,
    user_pid: pid,
    user_birth_date: birth_date,
    user_access_date: access_date,
    user_role: role,
    user_status: status,
    user_password: password,
  };

  db.query(q, [user, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
export const deleteUser = (req, res) => {
  const id = req.params.id;
  const q = 'DELETE FROM users WHERE user_id = ?';
  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
