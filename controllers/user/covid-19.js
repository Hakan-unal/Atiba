exports.displayCovid19Page = (req, res) => {
    res.render("./pugs/covid-19", { title: "Covid-19", isAuthentication: true });
}