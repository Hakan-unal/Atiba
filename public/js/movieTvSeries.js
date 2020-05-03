document.addEventListener("DOMContentLoaded", () => {

    const progresBar = document.querySelector("#progresBar");
    const category = document.querySelector("#category");
    const type = document.querySelector("#type");
    const platform = document.querySelector("#platform");
    const row = document.querySelector("#row");
    const content = document.querySelector("#content");


    const getData = () => {

        return fetch('http://localhost:3000/json/filmler_ve_diziler.json')
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



    const displayList = (category, type, platform) => {
        

        getData().then(data => {

            content.innerHTML = `
            <table class="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#Poster</th>
                    <th scope="col">#Name</th>
                    <th scope="col">#Platform</th>
                    <th scope="col">#Category</th>
                    <th scope="col">#Type</th>
                </tr>
                <tbody id="table">
                </tbody>
            </table>
            `;
            
            data.forEach(element => {
                if (element.ktg1 === category & element.type === type & element.platform === platform) {
                    document.querySelector("#table").innerHTML += `
                <tr>
                    <th> <a href="${element.url}"> <img src="${element.img}" style="width:100px;"> </a> </th>
                    <th> ${element.name}</th>
                    <th>${element.platform}</th>
                    <th> ${element.ktg1}</th>
                    <th>${element.type}</th>
                </tr>

            `
                }
            });



        });
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
        content.innerHTML="";
        console.log(category.value, type.value, platform.value);
        console.log("category")

        progresBarLoading(category.value, type.value, platform.value);
    })



    type.addEventListener("input", () => {
        content.innerHTML="";

        console.log(category.value, type.value, platform.value);
        console.log("type")

        progresBarLoading(category.value, type.value, platform.value);
    })



    platform.addEventListener("input", () => {
        content.innerHTML="";

        console.log(category.value, type.value, platform.value);
        console.log("platform")

        progresBarLoading(category.value, type.value, platform.value);
    })



})