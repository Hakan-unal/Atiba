exports.displayMoviesPage = (req, res) => {
    res.render("./pugs/movies", { title: "Movies", isAuthentication: true });
}