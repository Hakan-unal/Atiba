exports.displayBooksPage = (req, res) => {
    res.render("./pugs/books", { title: "Books", isAuthentication: true });
}