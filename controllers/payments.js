import { db } from '../db.js';

export const getPayments = (req, res) => {
  const q = req.query.type
    ? 'SELECT * FRPM payments WHERE payment_type =?'
    : 'SELECT * FROM payments';

  db.query(q, [req.query.type], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
export const getPayment = (req, res) => {
  return res.json('form controler');
};

export const getPeymentsUser = (req, res) => {
  const q =
    'SELECT * FROM payments LEFT JOIN users ON payments.user_id=users.user_id ORDER BY payments.payment_id DESC';

  db.query(q, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const addPayment = (req, res) => {
  const user_id = req.body.user_id;
  const staff_id = req.body.staff_id;
  const payment_type = req.body.payment_type;
  const payment_amount = req.body.payment_amount;
  const payment_date = req.body.payment_date;
  const last_update = req.body.last_update;
  const month = req.body.month;

  const q =
    'INSERT into payments (user_id, staff_id, payment_type, payment_amount, payment_date, last_update, month) VALUES(?)';

  const values = [
    user_id,
    staff_id,
    payment_type,
    payment_amount,
    payment_date,
    last_update,
    month,
  ];
  db.query(q, [values], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      /* res.send('Payment inserted into database'); */
      res.send(result);
    }
  });
};

export const deletePayment = (req, res) => {
  const id = req.params.id;
  const q = 'DELETE FROM payments WHERE payment_id = ?';
  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
export const updatePayment = (req, res) => {
  const id = req.body.id;
  const user_id = req.body.user_id;
  const staff_id = req.body.staff_id;
  const payment_type = req.body.payment_type;
  const payment_amount = req.body.payment_amount;
  const payment_date = req.body.payment_date;
  const last_update = req.body.last_update;
  const month = req.body.month;

  const q = 'UPDATE payments SET ? WHERE payment_id = ?';

  const payment = {
    user_id,
    staff_id,
    payment_type,
    payment_amount,
    payment_date,
    last_update,
    month,
  };
  db.query(q, [payment, id], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.send(result);
    }
  });
};
