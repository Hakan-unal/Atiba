document.addEventListener("DOMContentLoaded", () => {


    const checkBox = document.querySelector("#checkbox");
    const form = document.querySelector("#loginform");
    const username = document.querySelector("#usernamebox");
    const progresBar = document.querySelector("#progresBar");





    const saveUserLocalStorage = (name) => {
        const user = [];
        const obj = {
            name: name
        };
        user.push(obj);
        localStorage.setItem("user", JSON.stringify(user));

    }

    form.addEventListener("submit", () => {
        progresBar.setAttribute("class", "progress");
        if (checkBox.checked) {
            saveUserLocalStorage(username.value);
        } else {
            localStorage.clear();
        }
    });


    if (JSON.parse(localStorage.getItem("user")) !== null) {
        const user = JSON.parse(localStorage.getItem("user"));
        username.value = user[0].name;
        checkBox.checked = true;
    }
});