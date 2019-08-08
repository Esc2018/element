// 订单列表渲染
renderPage();

function renderPage() {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == 4 && xHttp.status == 200) {
            let data = xHttp.responseText;
            data = JSON.parse(data);
            // console.log(data);
            let ul = "";
            for (let i = 0; i < data.length; i++) {
                ul += `<li>
                    <div class="ordercard-body">
                        <a href="">
                            <img src="${data[i].imgUrl}" alt="">
                        </a>
                        <div class="ordercard-content">
                            <div class="ordercard-head">
                                <div class="title">
                                    <a href="">${data[i].name}</a>
                                    <p class="status">${data[i].status}</p>
                                </div>
                                <p class="datetime">
                                    ${data[i].time}
                                </p>
                            </div>
                            <div class="ordercard-detail">
                                <p class="detail">
                                    <span>${data[i].shopname}</span>
                                    <span>等${data[i].num}件商品</span>
                                </p>
                                <p class="price">
                                    ¥${data[i].price}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="ordercard-bottom">
                        <button>
                            再来一单
                        </button>
                        <button>
                            评价
                        </button>
                    </div>
                </li>`
            }
            document.getElementsByClassName("order-list")[0].innerHTML = ul;
        }
    }
    xHttp.open("GET", "http://localhost:3000/order", true);
    xHttp.send();
}