// window.onload = function () {
//     foodList();
// }
foodList();

// 渲染轮播图
function foodList() {
    const promise = new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let list = xhttp.responseText;
                list = JSON.parse(list);
                resolve(list);
            }
        }
        xhttp.open("GET", "http://localhost:3000/", true);
        xhttp.send();
    });

    promise.then((list) => {

        let num = Math.ceil(list.length / 10);
        let j = 0;
        for (let i = 0; i < num; i++) {
            let dom = document.createElement("div");
            dom.classList.add("swiper-slide");
            let ulList = "";
            //每个分页器有10条数据
            for (; j < 13; j++) {
                ulList += `<li>
                <div class="food-img">
                    <img src="${list[j].imgurl}" alt="">
                </div>
                <span>${list[j].name}</span>
                </li>`;
                if (j + 1 == 10 && i == 0) {
                    break;
                }

            }
            ulList = "<ul>" + ulList + "</ul>";
            dom.innerHTML = ulList;
            console.log(document.getElementsByClassName("swiper-wrapper")[0])
            document.getElementsByClassName("swiper-wrapper")[0].appendChild(dom);
        }
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
        })

    })

}
