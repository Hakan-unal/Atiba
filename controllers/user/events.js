exports.displayEventsPage = (req, res) => {
    res.render("./pugs/events", { title: "Events", isAuthentication: true });
}