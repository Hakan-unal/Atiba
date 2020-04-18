const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRouter = require("./Route/admin");

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));


app.use("/", adminRouter);


app.listen(3000);