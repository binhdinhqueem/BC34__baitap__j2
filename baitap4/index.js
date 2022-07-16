/**
 * Input: Chiều dài, Chiều rộng
 * 
 * Process: 
 *      1.Lấy input
 *      2.Tính chu vi = (dài+rộng)*2
 *      3.Tính diện tích = dài * rộng
 *      4.In ra màn hình
 * 
 * Output: Tính kết quả
 */


document.getElementById("total").onclick = function (){
    // Dau vao
    var widthNumber = document.getElementById("widthNumber").value*1;
    var longNumber = document.getElementById("longNumber").value*1;
    // Xu ly
    var area = widthNumber * longNumber;
    var perimeter = (widthNumber+longNumber)*2;
    // Dau ra
    var result = "Diện tích: " + area + "; " + "Chu vi: " + perimeter;
    document.getElementById("notifiCation").innerHTML = result;
}