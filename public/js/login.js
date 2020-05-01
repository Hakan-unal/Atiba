document.addEventListener("DOMContentLoaded", () => {


    const checkBox = document.querySelector("#checkbox");
    const form = document.querySelector("#loginform");
    const username = document.querySelector("#usernamebox");
    const password = document.querySelector("#passwordbox");
    const progresBar = document.querySelector("#progresBar");





    const saveUserLocalStorage = (name, password) => {
        const user = [];
        const obj = {
            name: name,
            password: password
        };
        user.push(obj);
        localStorage.setItem("user", JSON.stringify(user));

    }

    form.addEventListener("submit", () => {
        progresBar.setAttribute("class", "progress");
        if (checkBox.checked) {
            saveUserLocalStorage(username.value, password.value);
        } else {
            localStorage.clear();
        }
    });


    if (JSON.parse(localStorage.getItem("user")) !== null) {
        const user = JSON.parse(localStorage.getItem("user"));
        username.value = user[0].name;
        password.value = user[0].password;
        checkBox.checked = true;
    }
});