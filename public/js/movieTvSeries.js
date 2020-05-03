document.addEventListener("DOMContentLoaded", () => {

    const progresBar = document.querySelector("#progresBar");
    const category = document.querySelector("#category");
    const type = document.querySelector("#type");
    const platform = document.querySelector("#platform");
    const row = document.querySelector("#row");



    const getData = () => {
        fetch('http://localhost:3000/json/filmler_ve_diziler.json')
            .then(response => {
                return response.json()
            }).then(text => {
                return text.Sayfa1;
            })
            .catch(error => {
                console.log(error);
            })
    }



    const progresBarAnimation = () => {
        let i = 0;

        const loading = () => {
            i += 6;
            progresBar.setAttribute("style", `width:${i}%;`);
        }

        let interval = setInterval(loading, 60);



        setTimeout(() => {
            clearInterval(interval);
            progresBar.setAttribute("style", `width:0;`);
        }, 2000)
    }



    const progresBarLoading = (category, type, platform) => {
        row.setAttribute("class", "row");
        progresBarAnimation();
        setTimeout(() => {
            row.setAttribute("class", "row d-none");
            displayList(category, type, platform);
        }, 2000);

    }






    category.addEventListener("input", () => {
        progresBarLoading(category.value, type.value, platform.value);
    })



    type.addEventListener("input", () => {
        progresBarLoading(category.value, type.value, platform.value);
    })



    platform.addEventListener("input", () => {
        progresBarLoading(category.value, type.value, platform.value);
    })



})