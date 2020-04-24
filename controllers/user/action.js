exports.displayActionPage = (req, res) => {
    res.render("./pugs/action", { title: "User Actions", isAuthentication: true });
}