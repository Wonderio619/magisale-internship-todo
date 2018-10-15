import bodyParser from 'body-parser';
import logger from 'morgan';
import SourceMapSupport from 'source-map-support';

const express = require('express');
const path = require('path');
const app = express();
const todoRoutes = require("./routes/route");
const mongoose = require("mongoose");

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

// connect to database
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todoDB',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

const port = process.env.PORT || 5000;

// add Source Map Support
SourceMapSupport.install();

app.use('/api/todos', todoRoutes);

app.get('/', (req,res) => {
  return res.end('Api working');
})

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

app.listen(port, () => console.log(`Listening on port ${port}`));