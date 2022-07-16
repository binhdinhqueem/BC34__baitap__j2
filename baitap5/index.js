/**
 * Input: 1 số có 2 chữ số
 * 
 * Process: 
 *      1. Lấy input
 *      2. Lấy số hàng đơn vị
 *      3. Lấy số hàng chục
 *      4. Tổng 2 số vừa lấy
 *      5. In ra màn hình
 * 
 * Output: Tính tổng 2 ký số
 */

// var number1 = 94;

// var unitNumber1 = number % 10;
// var dozensNumber1 = Math.floor (number/10);

// var totalCalculator = unitNumber1 + dozensNumber1;


// console.log("Số có 2 chữ số:",number);
// console.log("Kết quả là:", totalCalculator);

document.getElementById("total").onclick = function (){
    // Dau vao
    var number = document.getElementById("number").value*1
    // Xu ly
    var unitNumber = number % 10;
    var dozensNumber = Math.floor (number/10);
    var total = unitNumber + dozensNumber;
    // Dau ra
    var result = "Kết quả là: " + total;
    document.getElementById("notifiCation").innerHTML = result;
}