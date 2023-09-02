import mysql from 'mysql';

export const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'fenix_registration',
  /*  user: 'mmafenix_djordje',
    host: 'localhost',
    password: 'vaske147369',
    database: 'mmafenix_fenix_registration', */
});
