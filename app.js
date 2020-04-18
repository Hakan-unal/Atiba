const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const visitorRouter = require("./routes/visitor");
const userNavbarRouter = require("./routes/user/navbar");
const userPanelRouter = require("./routes/user/panel");

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));


app.use("/navbar", userNavbarRouter);
app.use("/panel", userPanelRouter);
app.use("/", visitorRouter);



app.listen(3000);