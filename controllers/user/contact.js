exports.displayContactPage = (req, res) => {
    res.render("./pugs/contact", { title: "Contact", isAuthentication: true });
}


exports.postContactPage = (req, res) => {
    



    res.redirect("/");
}