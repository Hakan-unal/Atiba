const database = require("../utility/database");
const mongodb = require('mongodb');
const logController = require("../controllers/log");


exports.saveUser = (username, name, surname, email, password) => {
    const db = database.getdb();
    db.collection("users").insertOne(
        {
            username: username,
            name: name,
            surname: surname,
            email: email,
            password: password
        }, (err, result) => {

            if (err) {
                let date = new Date();
                return logController.saveLocalStorage("ERROR SIGN-UP", date, err);
            }
            let date = new Date();
            logController.saveLocalStorage("Succes SIGN-UP", date, result.ops);

        });
}

