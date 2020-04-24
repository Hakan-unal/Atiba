const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const errorController=require("./controllers/error.js");
const app = express();

const visitorRouter = require("./routes/visitor");
const userRouter = require("./routes/user");

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));


app.use("/user", userRouter);
app.use(visitorRouter);
app.use(errorController.get404Page);



app.listen(3000,()=>{
    console.log("Port:3000 running")
});