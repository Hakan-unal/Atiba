const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb+srv://Hakan-unal:XrBDTYFNMOaMtLhA@hakan-db-q02p3.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "atiba";
let db;


const mongoConnect = (callback) => {

    MongoClient.connect(connectionUrl, { useUnifiedTopology: true })
        .then(client => {
            console.log(" ");
            console.log('MongoDB connected to atiba');
            db = client.db(dbName);
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}


const getdb = () => {
    if (db) {
        return db;
    }
    throw "No Database";
}







exports.mongoConnect = mongoConnect;
exports.getdb = getdb;