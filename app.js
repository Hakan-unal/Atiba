const express = require("express");
const bodyParser = require('body-parser');
const errorController = require("./controllers/error.js");
const mongoConnect = require('./utility/database');

const port = 3000;

const app = express();
const visitorRouter = require("./routes/visitor");
const userRouter = require("./routes/user");

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use("/user", userRouter);
app.use(visitorRouter);
app.use(errorController.get404Page);


mongoConnect((client) => {

    app.listen(port, () => {
        console.log(" ");
        console.log(`Port: ${port}   running...`);
    });
});