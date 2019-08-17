window.onresize = resetSize;
window.onload = resetSize;
// resetSize()

function resetSize() {
    let w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    // console.log(w)
    let explorer = window.navigator.userAgent.toLowerCase();
    // console.log(explorer)

    // if (explorer.includes("edge")) {
    //     console.log("yes")
    //     w *= 2;
    // }
    console.log(w);
    document.getElementsByTagName('html')[0].style.fontSize = w / 10 + 'px';
}

let topBtn = document.getElementsByClassName("backTop")[0];


window.onscroll = function () {
    if (document.documentElement.scrollTop > 1000) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// 点击按钮返回顶部
topBtn.onclick = function () {
    let distance = document.documentElement.scrollTop;
    let speed = Math.floor(distance / 10);
    let timer = setInterval(function () {
        let doc = document.documentElement.scrollTop;
        document.documentElement.scrollTop = doc - speed;
        if (document.documentElement.scrollTop <= 0) {
            document.documentElement.scrollTop = 0;
            // topBtn.style.display = "none";
            clearInterval(timer);
        }
    }, 30)
}

// a标签跳转变色
let aList = document.querySelectorAll('.footer-box > a');
// 获取url地址
let url = window.location.href;
// url地址和a标签的href进行比较
for (let index = 0; index < aList.length; index++) {
    (function () {
        if (aList[index].href == url) {
            aList[index].style.color = "#0d87c4";
        } else {
            aList[index].style.color = "#8e8e93";
        }
    })(index)
}