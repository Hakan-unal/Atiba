var unirest = require("unirest");

var req = unirest("GET", "https://google-books.p.rapidapi.com/volumes");

req.headers({
	"x-rapidapi-host": "google-books.p.rapidapi.com",
	"x-rapidapi-key": "b9b2c05cfamsh40e71d540d40b11p15e7d7jsnb566767fd57d"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});