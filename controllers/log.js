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
