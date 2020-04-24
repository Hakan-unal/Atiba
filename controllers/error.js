exports.get404Page = (req, res) => {
    res.render("./pugs/404",{title:"404 Not Found"});
}