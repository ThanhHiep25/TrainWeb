$(document).ready(() => {
    $('#menuDK').click(() => {
        $('#myModal').modal()
    })

    function ktMa() {
        let ma = $('#txtMa').val()
        let regexMa = /^(BN-)\d{5}$/;

        if (ma.trim() === "") {
            $('#errMa').html("Không được để trống!!!");
            return false;
        }
        if (!regexMa.test(ma)) {
            $('#errMa').html("BN-YYYYY");
            return false;
        }
        $('#errMa').html("(*)");
        return true;
    }
    $('#txtMa').blur(ktMa);

    function ktPass() {
        let pass = $('#txtPass').val();
        let regexPass = /^.{6,}$/;

        if (pass.trim() === "") {
            $('#errPass').html("Không được để trống!!!");
            return false;
        }

        if (!regexPass.test(pass)) {
            $('#errPass').html("Mật khẩu chứa từ 6 ký tự");
            return false;
        }
        $('#errPass').html("(*)");
        return true;
    }
    $('#txtPass').blur(ktPass);

    function ktDate() {
        let toDay = new Date();
        let ngayKham = new Date($('#txtDate').val());
        ngayKham = ngayKham.getDate();
        toDay = toDay.getDate();

        if ($('#txtDate').val().trim() === "") {
            $('#errDate').html("Không được để trống!!!");
            return false;
        }
        if (ngayKham < toDay) {
            $('#errDate').html("Ngày khám phải sau ngày hiện tại 1 ngày");
            return false;
        }
        $('#errDate').html("(*)");
        return true;
    }
    $('#txtDate').blur(ktDate);


    let i = 0;
    $('#btnDatLich').click(() => {
        if (!ktMa() || !ktDate() || !ktPass()) {
            alert("Vui lòng nhập đầy đủ và chính xác thông tin!!!")
            return false;
        }

        let tong = 0;
        if ($('#kbtyc').is(":checked"))
            tong += 500000;
        if ($('#bsnt').is(":checked"))
            tong += 500000;
        if ($('#bstyc').is(":checked"))
            tong += 500000;

        let ma = $('#txtMa').val();
        let pass = $('#txtPass').val();
        let ngayKham = $('#txtDate').val();
        let phuThu = tong;
        let chuyenKhoa = $('#selChuyenKhoa').val();

        let row = `<tr>
                    <td>${++i}</td>
                    <td>${ma}</td>
                    <td>${pass}</td>
                    <td>${ngayKham}</td>
                    <td>${dichvu}</td>
                    <td>${phuThu}</td>
                    <td>${chuyenKhoa}</td>
                </tr>`


        $('tbody').append(row);
        $('#myModal').modal("hide");
    })
})