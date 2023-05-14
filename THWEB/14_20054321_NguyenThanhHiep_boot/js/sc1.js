//Bai13
function checkIn() {
    var c = /^([A-Z]{1})+([a-z0-9]{1,50})$/;
    var tc = document.getElementById('check-box').value;

    if (c.test(tc)) {
        document.getElementById('loid1').innerHTML = "✔";
        return true;
    } else {
        document.getElementById('loid1').innerHTML = 'X';
        return false;
    }
}

//Bai14
function checkCreditCard() {
    var ccd = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;
    var tccd = document.getElementById('credit-card').value;
    if (ccd.test(tccd)) {
        document.getElementById('loid2').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid2').innerHTML = 'X';
        return false;
    }
}

//Bai15
function checkEmail() {
    var ce = /^\b([a-zA-Z0-9(!#$%&'*+-/=?^_`{|}~)]+\@([a-zA-Z]{1,30})+\.[a-zA-Z]{2,3})$/;
    var te = document.getElementById('email').value;
    if (ce.test(te)) {
        document.getElementById('loid3').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid3').innerHTML = 'X';
        return false;
    }
}

//Bai16
function checkUrl() {
    var curl = /^www.+[a-z0-9]+\.com.vn$/;
    var turl = document.getElementById('url').value;
    if (curl.test(turl)) {
        document.getElementById('loid5').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid5').innerHTML = 'X';
        return false;
    }
}

//Bai17

function checkTenDangNhap() {
    var cTenDangNhap = /^[a-z0-9]{6,45}$/;
    var tTenDangNhap = document.getElementById('TenDangNhap').value;
    if (cTenDangNhap.test(tTenDangNhap)) {
        document.getElementById('loid6').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid6').innerHTML = 'X';
        return false;
    }
}

function checkMatKhau1() {
    var cMatKhau1 = /^[A-Za-z0-9(!#$%&'@*+-/=?^_`{|}~)]{8,100}$/;
    var tMatKhau1 = document.getElementById('MatKhau1').value;
    if (cMatKhau1.test(tMatKhau1)) {
        document.getElementById('loid7').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid7').innerHTML = 'X';
        return false;
    }
}

function checkMatKhau2() {
    var cMatKhau2 = /^[A-Za-z0-9(!#$%&'@*+-/=?^_`{|}~)]{8,100}$/;
    var tMatKhau2 = document.getElementById('MatKhau2').value;
    if (cMatKhau2.test(tMatKhau2)) {
        document.getElementById('loid8').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid8').innerHTML = 'X';
        return false;
    }
}

function cmpMatKhau() {
    var cmpMatKhau1 = document.getElementById('MatKhau1').value;
    var cmpMatKhau2 = document.getElementById('MatKhau2').value;
    if (cmpMatKhau1 == cmpMatKhau2) {
        document.getElementById('loid8').innerHTML = 'Ok';
        return true;
    } else {
        document.getElementById('loid8').innerHTML = 'Mật khẩu khác nhau'
        return faslse;
    }
}

function checkHoVaTen() {
    var cHoVaTen = /^([A-Z]{1}[a-z]{1,}\s?[A-Z]{1}[a-z]{1,}\s?([A-Z]{1}[a-z]{1,}\s?)?([A-Z]{1}[a-z]{1,}\s?)?([A-Z]{1}[a-z]{1,}\s?)?)$/;
    var tHoVaTen = document.getElementById('HoVaTen').value;
    if (cHoVaTen.test(tHoVaTen)) {
        document.getElementById('loid9').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid9').innerHTML = 'X';
        return false;
    }
}

function checkNgaySinh() {
    var cNgaySinh = new Date();
    var tNgaySinh = document.getElementById('NgaySinh').value;
    tNgaySinh = new Date(tNgaySinh);
    if (tNgaySinh.getFullYear() < cNgaySinh.getFullYear()) {
        document.getElementById('loid10').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid10').innerHTML = 'X';
        return false;
    }
}

function checkSoDienThoai() {
    var cSoDienThoai = /^(\0*[0-9]){9,10}$/;
    var tSoDienThoai = document.getElementById('SoDienThoai').value;
    if (cSoDienThoai.test(tSoDienThoai)) {
        document.getElementById('loid12').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid12').innerHTML = 'X';
        return false;
    }
}

function checkEmail17() {

    var cEmail17 = /^\b([a-zA-Z0-9(!#$%&'*+-/=?^_`{|}~)]+\@([a-z0-9(!#$%&'*+-/=?^_`{|}~)]{2,})+\.com)$/;
    var tEmail17 = document.getElementById('Email17').value;
    if (cEmail17.test(tEmail17)) {
        document.getElementById('loid13').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid13').innerHTML = 'X';
        return false;
    }
}

//Bai18

function checkHo18() {
    var cHo18 = /^([A-Z]{1}[a-z]{1,}\s?([A-Z]{1}[a-z]{1,}\s?)?([A-Z]{1}[a-z]{1,}\s?)?)$/;
    var tHo18 = document.getElementById('Ho18').value;
    if (cHo18.test(tHo18)) {
        document.getElementById('loid14').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid14').innerHTML = 'X';
        return false;
    }
}

function checkTen18() {
    var cTen18 = /^([A-Z]{1}[a-z]{1,}\s?([A-Z]{1}[a-z]{1,}\s?)?([A-Z]{1}[a-z]{1,}\s?)?)$/;
    var tTen18 = document.getElementById('Ten18').value;
    if (cTen18.test(tTen18)) {
        document.getElementById('loid14').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid14').innerHTML = 'X';
        return false;
    }
}

function checkEmail18() {

    var cEmail18 = /^\b([a-zA-Z0-9(!#$%&'*+-/=?^_`{|}~)]+\@([a-z0-9(!#$%&'*+-/=?^_`{|}~)]{2,})+\.com)$/;
    var tEmail18 = document.getElementById('Email18').value;
    if (cEmail18.test(tEmail18)) {
        document.getElementById('loid15').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid15').innerHTML = 'X';
        return false;
    }
}

function checkEmail181() {

    var cEmail181 = /^\b([a-zA-Z0-9(!#$%&'*+-/=?^_`{|}~)]+\@([a-z0-9(!#$%&'*+-/=?^_`{|}~)]{2,})+\.com)$/;
    var tEmail181 = document.getElementById('Email181').value;
    if (cEmail181.test(tEmail181)) {
        document.getElementById('loid16').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid16').innerHTML = 'X';
        return false;
    }
}

function cmpEmail() {
    var cmpEmail1 = document.getElementById('Email18').value;
    var cmpEmail2 = document.getElementById('Email181').value;
    if (cmpEmail1 == cmpEmail2) {
        document.getElementById('loid16').innerHTML = 'Ok';
        return true;
    } else {
        document.getElementById('loid16').innerHTML = 'Email khác nhau'
        return faslse;
    }
}

function checkMatKhau18() {
    var cMatKhau18 = /^([A-Za-z0-9]{1,}[!#$@%&'*+-/=?^_`{|}~]?){6,}$/;
    var tMatKhau18 = document.getElementById('MatKhau18').value;
    if (cMatKhau18.test(tMatKhau18)) {
        document.getElementById('loid17').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid17').innerHTML = 'X';
        return false;
    }
}

function checkNamSinh18() {
    var cNamSinh18 = /^[0-9]{4}$/
    var d = new Date();
    var kq = d.getFullYear() - 18;
    var tNamSinh18 = document.getElementById('NamSinh18').value;

    if (cNamSinh18.test(tNamSinh18) && tNamSinh18 <= kq) {
        document.getElementById('loid18').innerHTML = '✔';
        return true;
    } else {
        document.getElementById('loid18').innerHTML = 'X';
        return false;
    }
}

function buttonDangKi() {
    var checkBoolean = checkHo18() == true && checkTen18() == true && checkEmail18() == true && checkEmail181() == true &&
        cmpEmail() == true && checkMatKhau18() == true && checkNamSinh18() == true;
    if (!checkBoolean)
        alert('Đăng Kí Không Thành Công!!');
    else
        alert('Đăng Kí Tài Khoản Thành Công!!');
}