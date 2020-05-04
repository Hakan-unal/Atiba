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




    const displayList = (first, second) => {
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
            let resultArray = [];

            // burada sıkıntı var yarın düzelt  tekrarı önlemen lazım
            for (let i = 0; i < 8; i++) {
                let index = Math.round(Math.random() * 16);
                if (deger === index) {
                    index = Math.round(Math.random() * 16)
                }

                resultArray.push(category1[index]);
                if (i >= 4) {
                    resultArray.push(category2[index]);
                }

            }
            console.log(resultArray);
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
        displayList(firstSelection, secondSelection);

    }
    getLocalStorage();

})