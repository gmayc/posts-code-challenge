const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = 3001;

app.listen(port, () => console.log(`app listening on port: ${port}`));
