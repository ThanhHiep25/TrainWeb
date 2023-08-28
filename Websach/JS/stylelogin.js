
// Tạo một mảng chứa các đối tượng có id và password
var users = [
    {id: "00012345", password: "abc123"},
    {id: "00054321", password: "xyz789"},
    {id: "00098765", password: "pqr456"}
  ];

// Hàm để kiểm tra xem id và password có hợp lệ không
function checkId() {
    // Lấy giá trị id và password từ input
    var userid = $("#user_id").val();
    var password = $("#password_user").val();
  
    // Kiểm tra xem id có đúng định dạng không
    var idtest = /^000\d{5}$/; // biểu thức chính quy để kiểm tra id
    if (!idtest.test(userid)) {
      showNotification("ID không đúng");
      return false;
    }
  
    // Kiểm tra xem id và password có khớp với một đối tượng nào trong mảng không
    var valid = false; // biến để lưu trạng thái hợp lệ
    for (var i = 0; i < users.length; i++) {
      // Duyệt qua từng đối tượng trong mảng
      if (users[i].id === userid && users[i].password === password) {
        // Nếu id và password khớp với đối tượng hiện tại
        valid = true; // gán trạng thái hợp lệ là true
        break; // thoát khỏi vòng lặp
      }
    }


    // Hiển thị thông báo tùy theo trạng thái hợp lệ
    if (valid) {
        showNotification("Đăng nhập thành công");
        return true;
      } else {
        showNotification("ID hoặc mật khẩu không đúng");
        return false;
      }
}

$('#submit').click(function() {

    if (!checkId()) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }
});

function showNotification(message) {
    //lấy phần tử từ div và p
    var notification = document.getElementById('notification');
    var notificationMessage = document.getElementById('notification-message');

    // Gán nội dung cho phần tử p
    notificationMessage.textContent = message;


    // Bỏ lớp hidden
    notification.classList.remove('hidden');

    // Đặt một hẹn h ẩn phẩn tử div
    setTimeout(function () {
        notification.classList.add('hidden');
    },3000);
}

