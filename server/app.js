const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = 3000;

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const uploadsController = require('./routes/books');

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:adminadmin@cluster0.hsbrndg.mongodb.net/pripravamat?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Mongodb"))
  .catch(() => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/uploads', uploadsController);

app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
