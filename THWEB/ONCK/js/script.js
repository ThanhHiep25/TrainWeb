$(document).ready(function() {
    $("#openModal").click(function() {
        $("#formModal").modal();
    })

    function checkHoTen() 
    {
        let cTen = $("#tfHoTen").val();
        let rTen = /^([A-Z]{1}[a-z]{1,}\s?[A-Z]{1}[a-z]{1,}\s?([A-Z]{1}[a-z]{1,}\s?)?([A-Z]{1}[a-z]{1,}\s?)?([A-Z]{1}[a-z]{1,}\s?)?)$/;

        if (cTen.trim() === "") 
        {
            $("#errHoTen").html("Không được để trống!!");
            return false;
        }
        if (!rTen.test(cTen)) 
        {
            $("#errHoTen").html("Viết hoa kí tự đầu mỗi chữ cái!!");
            return false;
        }
        $("#errHoTen").html("Hợp lệ!!");
        return true;
    }
    $("#tfHoTen").keyup(checkHoTen);

    function checkSDT() 
    {
        let cSDT = $("#tfSDT").val();
        let rSDT = /^[0-9]{10}$/;

        if (cTen.trim() === "") 
        {
            $("#errSDT").html("Không được để trống!!");
            return false;
        }
        if (!rSDT.test(cSDT)) 
        {
            $("#errSDT").html("Số điện thoại phải có 10 số!!");
            return false;
        }
        $("#errSDT").html("Hợp lệ!!");
        return true;
    }
    $("#tfSDT").keyup(checkSDT);

    function checkNguoi() 
    {
        let cNguoi = $("#tfNguoi").val();

        if (cTen.trim() === "") 
        {
            $("#errNguoi").html("Không được để trống!!");
            return false;
        }
        if (cNguoi < 1) 
        {
            $("#errNguoi").html("Số người tham dự phải lớn hơn 1!!");
            return false;
        }
        $("#errNguoi").html("Hợp lệ!!");
        return true;
    }
    $("#tfNguoi").keyup(checkNguoi);

    function checkNgay() 
    {
        let cNgay = $("#tfNgay").val();
        let rDate = new Date();
        let rNgay = rDate.getDate();
        let rThang = rDate.getMonth();
        let rNam = rDate.getFullYear();

        if (cNgay.trim() === "") 
        {
            $("#errNgay").html("Không được để trống!!");
            return false;
        }
        if (cNgay.getFullYear() < rNam) 
        {
            if(cNgay.getMonth() < rThang && cNgay.getFullYear() == rNam)
            {
                if(cNgay.getDate()+ 1 < rNgay)
                {
                    $("#errNgay").html("Viết hoa kí tự đầu mỗi chữ cái!!");
                    return false;
                }
            }
        }
        $("#errNgay").html("Hợp lệ!!");
        return true;
    }
    $("#tfNgay").keyup(checkNgay);

    function checkGio() 
    {
        let cGio = $("#tfGio").val();

        if (cGio.trim() === "") 
        {
            $("#errGio").html("Không được để trống!!");
            return false;
        }
        $("#errGio").html("Hợp lệ!!");
        return true;
    }
    $("#tfGio").keyup(checkGio);
    
    let i = 0;
    $("#bLuu").click(function(){

        let ten = $('#tfHoTen').val();
        let sdt = $('#tfSDT').val();
        let ngay = $('#tfNgay').val();
        let gio = $('#tfGio').val();
        let nguoi = $('#tfNguoi').val();
        let tiec = $('select#cbbLoaiTiec option').filter(":selected").val();
        let phong = "Thường";
        let dv = "Trống!!";
        let tv = "Khách";
        let gc = $('#taGhiChu').val();

        //loai phong
        if ($('#cbLoaiPhong1').is(":checked"))
        {
            phong = "VIP"
            
        }
        else if($('#cbLoaiPhong2').is(":checked"))
        {
           phong = "Thường"
        }
       
        //dich vu
        if($('#cbDichVu1').is(':checked') && $('#cbDichVu2').is(':checked'))
        {
            dv = "+ Nhân viên phục vụ riêng <br> + Hoa tươi"
        }
        else if($('#cbDichVu1').is(':checked'))
        {
            dv = "+ Nhân viên phục vụ riêng"
        }
        else if($('#cbDichVu2').is(':checked'))
        {
            dv = "+ Hoa tươi"
        }
        else
        {
            dv = "Trống!!"
        }
        
        //thanh vien
        if($('#cbThanhVien').is(':checked'))
        {
            tv = "Thành viên"
        }


        if (!checkHoTen && !checkSDT && !checkNgay && !checkGio && !checkNguoi) 
        {
            alert("Vui lòng nhập đầy đủ và chính xác thông tin!!")
            return false;
        }
        let rowData = '<tr><td>'+ (++i) +'</td><td>'+ ten +'</td><td>'+ sdt +'</td><td>'+ ngay +'</td><td>'+ gio +'</td><td>'+ nguoi +'</td><td>'+ tiec +'</td><td>'+ phong +'</td><td>'+ tv +'</td><td>'+ dv +'</td><td>'+ gc +'</td></tr>'
        $("#tbm").append(rowData);
        $("#formModal").modal("hide")
        return true
    })
})