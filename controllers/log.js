const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./LocalStorage');




exports.getLocalStorage = () => {

    let log = JSON.parse(localStorage.getItem("logs"));
    if (log === null) {
        log = [];
    }
    return log;
}



exports.saveLocalStorage = (method, date, url) => {
    const obj = {
        method: method,
        date: date,
        url: url
    }
    const log = this.getLocalStorage();
    log.push(obj);
    localStorage.setItem("logs", JSON.stringify(log));
}



exports.getActionLocalStorage = () => {
    let actions = JSON.parse(localStorage.getItem("actions"));

    if (actions) {
        return actions;
    }
    actions = [];
    return actions;
}



exports.saveActionLocalStorage = (id, operation) => {
    const actions = this.getActionLocalStorage();
    const date = new Date();
    obj = {
        id: id,
        operation: operation,
        date: date
    }
    actions.push(obj);
    localStorage.setItem("actions", JSON.stringify(actions));
}