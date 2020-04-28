const database = require("../utility/database");
const logController = require("../controllers/log");
const ObjectID = require("mongodb").ObjectID;

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


exports.checkUser = (username, password) => {
    const db = database.getdb();

    return db.collection("users")
        .findOne({ username: username, password: password })
        .then(user => {
            let value = false;
            if (user !== null) {
                value = user;

                let date = new Date();
                logController.saveLocalStorage("Succes Login", date, user);
            }
            return value;
        })
        .catch(err => {
            let date = new Date();
            logController.saveLocalStorage("UnSucces Login", date, "/login");
            console.log(err);
        });
}


exports.findUser = (id) => {
    const db = database.getdb();

    return db.collection("users")
        .findOne({ _id: ObjectID(id) })
        .then(user => {
            let value = false;
            if (user !== null) {
                value = user;
            }
            return value;
        })
}



exports.updateUser = (id, name, surname, username, email) => {
    const db = database.getdb();
    db.collection("users").updateOne({
        "_id": ObjectID(id)
    }, {
        $set: {
            username: username,
            name: name,
            surname: surname,
            email: email
        }
    })
} 
