window.addEventListener("DOMContentLoaded", () => {



    const xhr = new XMLHttpRequest();



    const worldDisplay = (obj) => {
        let totalTest, totalCase, totalDeath, totalCritic, totalRecovered, todayCase, todayDeath;
        totalTest = 0;
        totalCase = 0;
        totalDeath = 0;
        totalCritic = 0;
        totalRecovered = 0;
        todayCase = 0;
        todayDeath = 0;


        obj.response.forEach(element => {
            totalTest += Number(element.tests.total);
            totalCase += Number(element.cases.total);
            totalDeath += Number(element.deaths.total);
            totalCritic += Number(element.cases.critical);
            totalRecovered += Number(element.cases.recovered);
            todayDeath += Number(element.deaths.new);
            todayCase += Number(element.cases.new)
        });
        document.querySelector("#toplamtest").innerText = totalTest;
        document.querySelector("#toplamvaka").innerText = totalCase;
        document.querySelector("#toplamolum").innerText = totalDeath;
        document.querySelector("#toplamcritic").innerText = totalCritic;
        document.querySelector("#toplamkurtarilan").innerText = totalRecovered;
        document.querySelector("#gunlukvaka").innerText = todayCase;
        document.querySelector("#gunlukolum").innerText = todayDeath;
   

    }


    const calculate = () => {
        let url = `https://covid-193.p.rapidapi.com/statistics`;

        xhr.open(`GET`, url, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "b9b2c05cfamsh40e71d540d40b11p15e7d7jsnb566767fd57d");

        xhr.onload = function () {

            if (this.status === 200) {
                const text = JSON.parse(this.responseText);
                worldDisplay(text);
            }
        }
        xhr.send();
    }


    calculate();















});