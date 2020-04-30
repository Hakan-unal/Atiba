const database = require("../utility/database");
const ObjectID = require("mongodb").ObjectID;




exports.getMovies = () => {
    const db = database.getdb();

    const display = (movies) => {
        return movies;


    }
    
    return db.collection("wmovies")
        .find({ category: 4 })
        .toArray((err, movies) => {
            if (err) {
            }
            display(movies);
        })
}
