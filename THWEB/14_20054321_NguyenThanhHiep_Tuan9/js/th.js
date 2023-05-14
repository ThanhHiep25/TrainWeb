var i = 1;
$(document).ready(function() {
    $("#menuDK").click(function() {
        $("#myModal").modal()
    })

    function display() {
        var x = document.getElementById('cbox_kyhan').value;
        document.getElementById('check').innerHTML = x;
        const DonGia = document.getElementById('txt_DonGia');
        if (x == "a") {
            DonGia.value = 300000;
        }
        if (x == "b") {
            DonGia.value = 500000;
        }
        if (x == "c") {
            DonGia.value = 800000;
        }

    }

    function ktthongtin() {
        var ktthong = /^([A-Z]{1})+([a-z\s]{1,100})$/;
        if ($("#txtten").val() == "") {
            $("#tbten").html("* bắt buộc nhập");
            return false;
        }
        if (!ktthong.test($("#txtten").val())) {
            $("#tbten").html("Viết hoa chữ đầu");
            return false;
        }
        $("#tbten").html("*");
        return true;
    }
    $("#txtten").blur(ktthongtin);

    function ktsdt() {
        var ktsdt = /^([09||07||08]{2})\d{8}$/;
        if ($("#txtsdt").val() == "") {
            $("#tbsdt").html("* bắt buộc nhập");
            return false;
        }
        if (!ktsdt.test($("#txtsdt").val())) {
            $("#tbsdt").html("SDT gồm 10 số và bắt đầu 09,07,08");
            return false;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#txtsdt").blur(ktsdt);

    function ktdiachi() {
        var diachi = /^[0-9]{1,20}\s[a-zA-Z\s]+$/;
        if ($("#txtdiachi").val() == "") {
            $("#tbdiachi").html("* bắt buộc nhập");
            return false;
        }
        if (!diachi.test($("#txtdiachi").val())) {
            $("#tbdiachi").html("* Không chứa ký tự đặc biệt");
            return false;
        }
        $("#tbdiachi").html("*");
        return true;
    }
    $("#txtdiachi").blur(ktdiachi);


    $("#btnSave").click(function() {
        if (!ktthongtin() || !ktsdt() || !ktdiachi()) {
            $("#thongbao").html("Bạn cần phải nhập đầy đủ thông tin")
            return false;
        }

        var datbao = $("#txtthanhnien").val();
        var kyhan = $("#txtkyhan").val();
        var thongtin = $("#txtten").val();
        var diachi = $("#txtdiachi").val();
        var tongtien = $("#txtgia").val();
        var thanhtoan = $("#txtthanhtoan").val();

        var them = "<tr><td>" + (i++) + "</td><td>" + datbao + "</td><td>" + kyhan + "</td><td>" +
            thongtin + "</td><td>" + diachi + "</td><td>" + tongtien + "</td><td>" + thanhtoan + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;

    })
})