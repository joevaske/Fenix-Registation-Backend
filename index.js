import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import paymentsRoutes from './routes/payments.js';
import postsRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();

app.use(cors());

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

// Upload User Image

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), function (req, res, next) {
  //const file = req.file;
  const file = req.file;
  console.log(file.filename);
  res.status(200).json(file.filename);
});

// Api Routes

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.use('/payments', paymentsRoutes);
app.use('/posts', postsRoutes);

app.listen(3005, () => {
  console.log('Server runing on port 3005');
});
