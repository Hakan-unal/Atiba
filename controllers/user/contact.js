exports.displayContactPage = (req, res) => {
    res.render("./pugs/contact", { title: "Contact", isAuthentication: true });
}