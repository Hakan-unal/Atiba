exports.displayAccountPage = (req, res) => {
    res.render("./pugs/account", { title: "Account", isAuthentication: true });
}