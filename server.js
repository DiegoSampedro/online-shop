const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const errorhandler = require('errorhandler')
const path = require('path');
const apiRouter = require('./api/api')

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/api', apiRouter);
app.use(errorhandler());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

module.exports = app;