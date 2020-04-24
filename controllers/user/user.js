exports.displayUserPage = (req, res) => {
    res.render("./pugs/user", { title: "Client Page", isAuthentication: true });
}