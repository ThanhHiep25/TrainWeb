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


function checkEmail() {
    var ce = /^\b([a-zA-Z0-9(!#$%&'*+-/=?^_`{|}~)]+\@([a-zA-Z]{1,30})+\.com)$/;
    var te = document.getElementById('email').value;
    if (ce.test(te)) {
        document.getElementById('check2').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('check2').innerHTML = '&#8627; Nhập sai định dạng.';
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

function checkMatKhau2() {
    var cMatKhau2 = /^[A-Za-z0-9(!#$%&'@*+-/=?^_`{|}~)]{8,100}$/;
    var tMatKhau2 = document.getElementById('MatKhau2').value;
    if (cMatKhau2.test(tMatKhau2)) {
        document.getElementById('check4').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('check4').innerHTML = '&#8627; Mật khẩu 8 kí tự trở lên.';
        return false;
    }
}

function cmpMatKhau() {
    var cmpMatKhau1 = document.getElementById('MatKhau1').value;
    var cmpMatKhau2 = document.getElementById('MatKhau2').value;
    if (cmpMatKhau1 == cmpMatKhau2) {
        document.getElementById('check4').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('check4').innerHTML = '&#8627; Mật khẩu không trùng nhau.'
        return faslse;
    }
}

function checkNgaySinh() {
    var cNgaySinh = new Date();
    var tNgaySinh = document.getElementById('NgaySinh').value;
    tNgaySinh = new Date(tNgaySinh);
    if (tNgaySinh.getFullYear() < cNgaySinh.getFullYear()) {
        document.getElementById('check5').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('check5').innerHTML = '&#8627; Sai định dạng ngày sinh.';
        return false;
    }
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function buttonDangKi() {
    var checkBoolean = checkIn() == true && checkEmail() == true && checkMatKhau1() == true && checkMatKhau2() == true;
    if (!checkBoolean)
        alert('Đăng Ký Không Thành Công!!');
    else
        alert('Đăng Ký Thành Công!!');
}