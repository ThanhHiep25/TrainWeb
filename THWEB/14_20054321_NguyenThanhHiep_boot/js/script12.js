var c = 0;
var t;
var timer_is_on = 0;

function setBG() {
    let a = [
        "url(../img/pic1.jpg)",
        "url(../img/pic2.jpg)",
        "url(../img/pic3.jpg)"
    ];

    let n = a[Math.floor(Math.random() * a.length)];

    let d = document.getElementById("div1");

    d.style.backgroundImage = n;
    d.style.backgroundSize = "cover";

    t = setTimeout(setBG, 1000);
}

function play() {
    if (!timer_is_on) {
        timer_is_on = 1;
        setBG();
    }
}

function stop() {
    clearTimeout(t);
    timer_is_on = 0;
}