import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import paymentsRoutes from './routes/payments.js';
import cookieParser from 'cookie-parser';

const app = express();

/* app.use(cors()); */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.use(express.json());
app.use(cookieParser());

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.use('/payments', paymentsRoutes);

app.listen(3001, () => {
  console.log('Server runing on port 3001');
});
