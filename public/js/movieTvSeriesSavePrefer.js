document.addEventListener("DOMContentLoaded", () => {



    const getLocalStorage = () => {
        let userPrefers = [];
        if (JSON.parse(localStorage.getItem("userPrefers")) !== null) {
            userPrefers = JSON.parse(localStorage.getItem("userPrefers"));
        }
        return userPrefers;
    }


    const saveLocalStorage = (userPrefer) => {
        let userPrefers = getLocalStorage();
        userPrefers.push(userPrefer);
        localStorage.setItem("userPrefers", JSON.stringify(userPrefers));
    }



    const selector = (cat1, cat2, cat3) => {
        const userPrefer = {
            cat1: cat1,
            cat2: cat2,
            cat3: cat3
        }
        saveLocalStorage(userPrefer);
    }




















    content.addEventListener("click", (event) => {
        if (event.target.tagName === "TH") {
            selector(event.target.parentElement.children[0].children[0].value, event.target.parentElement.children[1].children[0].value, event.target.parentElement.children[2].children[0].value);
        }
    })

});