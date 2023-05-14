function checkIn() {
    var c = /^([A-Z]{1})+([a-z0-9]{1,50})$/;
    var tc = document.getElementById('check-box').value;

    if (c.test(tc)) {
        document.getElementById('check1').innerHTML = "✔";
        return true;
    } else {
        document.getElementById('check1').innerHTML = '&#8627;  In hoa kí tự đầu và không dấu.';
        return false;
    }
}

function checkMatKhau1() {
    var cMatKhau1 = /^[A-Za-z0-9(!#$%&'@*+-/=?^_`{|}~)]{8,100}$/;
    var tMatKhau1 = document.getElementById('MatKhau1').value;
    if (cMatKhau1.test(tMatKhau1)) {
        document.getElementById('check3').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('check3').innerHTML = '&#8627; Mật khẩu 8 kí tự trở lên.';
        return false;
    }

}