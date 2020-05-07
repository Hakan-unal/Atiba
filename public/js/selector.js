document.addEventListener("DOMContentLoaded", () => {

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



    const createCardList = (array) => {
        array.forEach(element => {
            content.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3 my-5">
                <div class="card bg-dark border-0">
                    <div class="card-img-top bg-dark">
                        <a class="stretched-link" href="${element.url}" target="_blank"></a>
                        <img src="${element.img}" style="width:100%;  height:275px;"> 
                        <div class="card-body border-0">
                            <div class="card-title text-center text-light border-0 font-weight-bold">${element.name}</div>
                            <div class="card-text text-center text-muted">(${element.ktg1})</div>
                        </div>
                    </div>
                </div>
            </div>
            `;

        });
    }



    const findPreferList = (first, second) => {
        let category1, category2;
        category1 = [];
        category2 = [];
        getData().then(data => {
            data.forEach(element => {
                if (element.ktg1 === first) {
                    category1.push(element);
                } else if (element.ktg1 === second) {
                    category2.push(element);
                }
            })

            let resultArray = new Set();

            for (let i = 0; i < 10; i++) {
                let index = Math.round(Math.random() * 16);

                resultArray.add(category1[index]);
                if (i >= 5) {
                    resultArray.add(category2[index]);
                }

            }
            createCardList(resultArray);
        })
    }




    const getLocalStorage = () => {
        let adventure, sciFi, action, thriller, war, drama, comedy;
        adventure = 0;
        sciFi = 0;
        action = 0;
        thriller = 0;
        war = 0;
        drama = 0;
        comedy = 0;
        const userPrefers = JSON.parse(localStorage.getItem("userPrefers"));
        userPrefers.forEach(element => {
            switch (element.cat1) {
                case "Adventure": adventure++; break;
                case "Sci-Fi": sciFi++; break;
                case "Action": action++; break;
                case "War": war++; break;
                case "Drama": drama++; break;
                case "Thriller": thriller++; break;
                case "Comedy": comedy++; break;
            }
        });
        const newArray = [adventure, sciFi, action, thriller, war, drama, comedy].sort((a, b) => a - b);
        let firstSelection = newArray[newArray.length - 1];
        let secondSelection = newArray[newArray.length - 2];
        switch (firstSelection) {
            case adventure: firstSelection = "Adventure"; break;
            case sciFi: firstSelection = "Sci-Fi"; break;
            case action: firstSelection = "Action"; break;
            case thriller: firstSelection = "Thriller"; break;
            case war: firstSelection = "War"; break;
            case drama: firstSelection = "Drama"; break;
            case comedy: firstSelection = "Comedy"; break;
        }

        switch (secondSelection) {
            case adventure: secondSelection = "Adventure"; break;
            case sciFi: secondSelection = "Sci-Fi"; break;
            case action: secondSelection = "Action"; break;
            case thriller: secondSelection = "Thriller"; break;
            case war: secondSelection = "War"; break;
            case drama: secondSelection = "Drama"; break;
            case comedy: secondSelection = "Comedy"; break;
        }
        findPreferList(firstSelection, secondSelection);

    }
    getLocalStorage();

})