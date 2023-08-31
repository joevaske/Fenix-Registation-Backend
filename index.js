const express = require('express');

const app = express();

const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'fenix_registration',
  /*  user: 'mmafenix_djordje',
  host: 'localhost',
  password: 'vaske147369',
  database: 'mmafenix_fenix_registration', */
});

// Create users
app.post('/create', (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
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

  db.query(
    'INSERT INTO users (user_fname, user_lname,  user_email, user_street, user_street_nr, user_post_nr, user_living_place, user_pid, user_birth_date, user_access_date, user_role, user_status, user_password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      fname,
      lname,
      email,
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
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Get user by id
app.get('/single-user', (req, res) => {
  const id = req.query.id;
  db.query('SELECT * FROM users WHERE user_id = ?', [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
/* 
export const updateProductById = (data, id, result) => {
  db.query(
    'UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?',
    [data.product_name, data.product_price, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
}; */

// Update users
app.put('/update', (req, res) => {
  const id = req.body.id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
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
  db.query(
    'UPDATE users SET user_fname = ?, user_lname = ?, user_email = ?, user_street = ?,  user_street_nr = ?, user_post_nr = ?, user_living_place = ?, user_pid = ?, user_birth_date = ?,  user_access_date = ?, user_role = ?, user_status = ?, user_password = ? WHERE user_id = ?',
    [
      fname,
      lname,
      email,
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
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
  console.log(
    fname,
    lname,
    email,
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
    id
  );
});

// Delete
app.delete('/delete-user/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM users WHERE user_id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => console.log('Server is runing on port 3001'));
