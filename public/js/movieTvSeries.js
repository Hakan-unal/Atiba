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
        let src = "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png";
        let href = "https://www.primevideo.com/?ref_=dvm_pds_amz_TR_lb_s_g|c_418832678618_m_qtxnGity-dc_s__"
        if (platform === "NETFLIX") {
            src = "https://yt3.ggpht.com/a/AATXAJzbOTiIfvxKnIRKQEgXcPJ25xyPhkRd3FtubA=s900-c-k-c0xffffffff-no-rj-mo";
            href = "https://www.netflix.com/tr/";
        }

        getData().then(data => {

            content.innerHTML = `
            <table class="table table-dark mt-5">
                <thead>
                
                </thead>
                <tbody id="table">
                </tbody>
            </table>
            `;
            let number = 0;
            data.forEach((element, index) => {
                
                if (element.ktg1 === category & element.type === type & element.platform === platform) {
                    number++;
                    document.querySelector("#table").innerHTML += `
                <tr> 
                    <th class="d-none"> 
                        <input class="category1" value="${element.ktg1}">
                    </th>
                    <th class="d-none"> 
                        <input class="category1" value="${element.ktg2}">
                    </th>
                    <th class="d-none"> 
                        <input class="category1" value="${element.ktg3}">
                    </th>
                    <th class="align-middle h3 text-center text-muted"> ${number}</th>
                    <th> <a href="${element.url}" target="_blank"> <img src="${element.img}" style="height:175px;"> </a> </th>
                    <th class="align-middle h5 text-center font-weight-bold"> ${element.name}</th>
                    <th class="float-right"><a href="${href}" target="_blank"> <img src="${src}" style="height:175px;"> </a></th>
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
        content.innerHTML = "";

        progresBarLoading(category.value, type.value, platform.value);
    })



    type.addEventListener("input", () => {
        content.innerHTML = "";


        progresBarLoading(category.value, type.value, platform.value);
    })



    platform.addEventListener("input", () => {
        content.innerHTML = "";


        progresBarLoading(category.value, type.value, platform.value);
    })



})