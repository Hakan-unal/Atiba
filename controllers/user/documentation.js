exports.displayDocumentationPage = (req, res) => {
    res.render("./pugs/documentation", { title: "Documentation", isAuthentication: true });
}