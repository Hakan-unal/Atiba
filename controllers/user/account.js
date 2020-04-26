exports.displayAccountPage = (req, res) => {
    res.render("./pugs/account", {
        title: "Account", isAuthentication: true, obj: {
            username: "kullanıcı adı",
            name: "name",
            surname: "surname",
            email: "email"
        }
    });
}

exports.postAccountPage = (req, res) => {

res.redirect("/");
}