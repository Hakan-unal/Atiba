exports.displayCinemaPage = (req, res) => {
    res.render("./pugs/cinema", { title: "Cinema", isAuthentication: true });
}