document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.querySelector("#checkbox");
    const form = document.querySelector("#loginform");
    const username = document.querySelector("#usernamebox");
    const password = document.querySelector("#passwordbox");

    const saveUserLocalStorage = (name, password) => {
        console.log("merhaba")
        const user = [];
        const obj = {
            name: name,
            password: password
        };
        console.log(obj)
        user.push(obj);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);

    }

    form.addEventListener("submit", () => {
        if (checkBox.checked) {

            saveUserLocalStorage(username.value, password.value);
        } else {
            localStorage.setItem("user", JSON.stringify(null));
        }
    });


    if (JSON.parse(localStorage.getItem("user")) !== null) {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user[0]);
        username.value = user[0].name;
        password.value = user[0].password;
        checkBox.checked = true;
    }

});

