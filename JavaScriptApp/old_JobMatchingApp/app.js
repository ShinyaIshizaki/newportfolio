const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Morrisf12!',
  database: 'mysql'
});

app.set("view engine", "ejs");

const usersRouter = require('./routes/users');
const jobsRouter = require('./routes/jobs');

app.use('/users', usersRouter);
app.use('/jobs', jobsRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});