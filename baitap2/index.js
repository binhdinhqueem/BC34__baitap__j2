/**
 * Input: 5 số thực
 * 
 * Process: 
 *      1: lấy input
 *      2: tính giá trị trung bình = (Tổng 5 số thực) / 5
 *      3: In ra màn hình
 * 
 * Output: Giá trị trung bình
 *      
 */


document.getElementById("totalNumber").onclick = function (){
    // Dau vao
    var number1 = document.getElementById("number1").value*1;
    var number2 = document.getElementById("number2").value*1;
    var number3 = document.getElementById("number3").value*1;
    var number4 = document.getElementById("number4").value*1;
    var number5 = document.getElementById("number5").value*1;
    // Xu ly
    var totalNumber = (number1+number2+number3+number4+number5)/5;
    // Dau ra
    var result = "Kết quả là: " + totalNumber;
    document.getElementById("notifiCation").innerHTML = result;
}