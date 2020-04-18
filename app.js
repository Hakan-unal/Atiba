const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const indexRouter = require("./Route/index");

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));


app.use("/", indexRouter);


app.listen(3000);