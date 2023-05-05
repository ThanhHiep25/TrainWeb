
  // Một mảng chứa thông tin về các sách
  var books = [
    {
        id: "book1",
        name: "Nam Thanh",
        author: "Ngày một người không còn là tất cả",
        price: 200000,
        category: "Tình yêu"
    },
    {
        id: "book2",
        name: "Diana wynne jones",
        author: "Ngôi nhà nghìn hành lang",
        price: 150000,
        category: "Kinh dị"
    },
    {
        id: "book3",
        name: "Nguyễn Hiệp",
        author: "Thanh Xuân",
        price: 100000,
        category: "Truyện ngắn"
    },
    {
        id: "book4",
        name: "Cơ Hiểu An",
        author: "Đơn giản",
        price: 80000,
        category: "Truyện ngắn"
    },
    {
        id: "book5",
        name: "Cửu Bảo Đào",
        author: "Mẹ thơm 1 cái",
        price: 50000,
        category: "Truyện ngắn"
    },
    {
        id: "book6",
        name: "E.B White",
        author: "Tiếng thiên nga kêu",
        price: 120000,
        category: "Truyện ngắn"
    },
    {
        id: "book7",
        name: "Mitsuyo kakuta",
        author: "Tôi bị bố bắt cóc",
        price: 100000,
        category: "Truyện ngắn"
    },
    {
        id: "book8",
        name: "Huỳnh Thái Ngọc",
        author: "Thỏ 7 màu và những người nghĩ nó là bạn",
        price: 100000,
        category: "Truyện ngắn"
    }
];

// Một hàm để thêm một sách vào giỏ hàng
function addToCart(bookId) {
    var book = books.find(function (b) {
        return b.id === bookId;
    });

    // Nếu không tìm thấy sách, thông báo lỗi và dừng hàm
    if (!book) {
        showNotification("Không tìm thấy sách có id " + bookId);
        return;
    }

    // Tạo một phần tử li để hiển thị thông tin sách trong giỏ hàng
    var li = document.createElement("li");
    li.textContent = book.name + " - " + book.author + " - " + book.price + " VND";

    // Thêm phần tử li vào danh sách ul trong giỏ hàng
    var cartList = document.getElementById("cart-list");
    cartList.appendChild(li);

    // Cập nhật lại biến total
    updateTotal(book.price);

    // Thông báo thành công
    showNotification("Đã thêm sách " + book.author + " vào giỏ hàng");
}

// Hàm để in hóa đơn
function printReceipt() {
    // Lấy phần tử HTML chứa nội dung hóa đơn
    var receiptElement = document.getElementById("receipt");
    var totalcart = document.getElementById('cart-list').value;
    // Lấy giá trị của thông tin khách hàng
    var customerName = document.getElementById("customer-name").value;
    var customerAddress = document.getElementById("customer-address").value;
    var customerPhone = document.getElementById("customer-phone").value;
    // Tạo một chuỗi HTML để hiển thị thông tin khách hàng
    var customerInfo = "<p>Thông tin khách hàng:</p>" +
      "<ul>" +
      "<li>Tên: " + customerName + "</li>" +
      "<li>Địa chỉ: " + customerAddress + "</li>" +
      "<li>Số điện thoại: " + customerPhone + "</li>" +
      "</ul>";
    // Tạo một cửa sổ mới
    var newWindow = window.open("", "PRINT");
    // Viết HTML cho cửa sổ mới
    newWindow.document.write("<html><head><title>Hóa đơn</title>");
    // Thêm CSS cho hóa đơn ở đây
    newWindow.document.write("<link rel=\"stylesheet\" href=\"css/receipt.css\" type=\"text/css\" media=\"print\" />"); 
    newWindow.document.write("</head><body>");
    // Thêm nội dung thông tin khách hàng
    newWindow.document.write(customerInfo);
     // Thêm nội dung hóa đơn từ phần tử HTML
    newWindow.document.write(totalcart);

    newWindow.document.write('<br>')
    newWindow.document.write('<button onclick="window.print();window.close();">Print hóa đơn</button>');

    newWindow.document.write("</body></html>");
    // Đóng tài liệu
    newWindow.document.close();
    // Tập trung vào cửa sổ mới
    newWindow.focus();
    // Thêm một thời gian chờ trước khi in
    /*setTimeout(function() {
      newWindow.print();
      newWindow.close();
    }, 1000);*/
    // Đặt lại giá trị của các ô nhập liệu
    document.getElementById("customer-name").value = "";
    document.getElementById("customer-address").value = "";
    document.getElementById("customer-phone").value = "";
  }

// Một biến để lưu tổng tiền của giỏ hàng
var total = 0;

// Một hàm để cập nhật tổng tiền khi thêm sách vào giỏ hàng
function updateTotal(bookPrice) {
    // Cộng thêm giá tiền của sách vào biến total
    total += bookPrice;

    // Hiển thị tổng tiền trong phần tử có id là total
    var totalElement = document.getElementById("total");
    totalElement.textContent = "Tổng tiền: " + total + " đồng";
}

//Hàm để xóa giỏ hàng
function clearCart() {
    total = 0
    // lấy phần tử ul chưa danh sách trong giỏ hàng
    var cartList = document.getElementById('cart-list');
    //Xóa tất cả các phần tử li trong ul
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }
    //Cập nhật lại total
    updateTotal(0);
    // Thông báo thành công
    showNotification('Đã xóa giỏ hàng thành công.')

}


// Một hàm để thanh toán khi nhấn nút có id là pay
// Hàm để thanh toán và gọi hàm in hóa đơn
function pay() {
    // Kiểm tra nếu tổng tiền bằng 0, thông báo giỏ hàng trống và dừng hàm
    var cartList = document.getElementById("cart-list");
    if (cartList.childElementCount === 0) {
        showNotification('Giỏ hàng của bạn trống. Vui lòng chọn sách để thanh toán.')
        return false;
    }

    // Xác nhận người dùng có muốn thanh toán hay không
    var confirm = window.confirm("Bạn có muốn thanh toán " + total + " đồng cho giỏ hàng của bạn không?");

    // Nếu người dùng đồng ý, thông báo thành công và làm trống giỏ hàng
    if (confirm) {
        showNotification("Cảm ơn bạn đã mua sách tại web của chúng tôi. Chúc bạn đọc sách vui vẻ.");
        // Làm trống danh sách ul trong giỏ hàng
        cartList.innerHTML = "";
        // Đặt lại tổng tiền về 0
        total = 0;
        
        // Cập nhật lại tổng tiền trong phần tử có id là total
        var totalElement = document.getElementById("total");
        totalElement.textContent = "Tổng tiền: " + total + " VND";
        // Gọi hàm in hóa đơn
        printReceipt();
    }
}

/*function pay() {
    // Lấy phần tử ul chứa danh sách sách trong giỏ hàng
    var cartList = document.getElementById("cart-list");
    // Kiểm tra nếu tổng tiền bằng 0, thông báo giỏ hàng trống và dừng hàm
    if (total === 0) {
        showNotification('Giỏ hàng của bạn trống. Vui lòng chọn sách để thanh toán.')
        return false;
    }

    // Hiển thị thông báo nổi để xác nhận người dùng có muốn thanh toán hay không
    confirmDialog.showModal();

    // Nếu người dùng đồng ý, thông báo thành công và làm trống giỏ hàng
    confirmPayment.onclick = function() {
        showNotification("Cảm ơn bạn đã mua sách tại web của chúng tôi. Chúc bạn đọc sách vui vẻ.");
        // Xóa tất cả các phần tử li trong ul
        while (cartList.firstChild) {
            // Lấy giá tiền của sách từ data-price
            var bookPrice = parseFloat(cartList.firstChild.dataset.price);
            // Gọi hàm updateTotal() với tham số âm để trừ đi giá tiền của sách
            updateTotal(-bookPrice);
            // Xóa phần tử li khỏi ul
            cartList.removeChild(cartList.firstChild);
        }
        // Đóng thông báo nổi
        confirmDialog.close();
        // Gọi hàm in hóa đơn
        printReceipt();
    }

    // Nếu người dùng hủy, đóng thông báo nổi
    cancelPayment.onclick = function() {
        confirmDialog.close();
    }
}
*/

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


// Lấy các phần tử từ HTML
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var searchResult = document.getElementById("search-result");

// Thêm sự kiện click cho phần tử button
searchButton.addEventListener("click", function() {
    // Lấy giá trị của phần tử input
    var category = searchInput.value;

    // Gọi hàm filterByCategory với giá trị đó và lưu kết quả vào một biến
    var filteredBooks = filterByCategory(category);

    // Làm trống phần tử ul
    searchResult.innerHTML = "";

    // Duyệt qua mảng kết quả và tạo các phần tử li để hiển thị thông tin sách
    for (var i = 0; i < filteredBooks.length; i++) {
        var book = filteredBooks[i];
        var li = document.createElement("li");
        li.textContent = book.name + " - " + book.author + " - " + book.price + " VND";
        searchResult.appendChild(li);
    }
});