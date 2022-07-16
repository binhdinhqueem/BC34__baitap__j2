/**
 * Input: so ngay lam, luong 1 ngay
 * 
 * Process:
 *      1: lay input
 *      2: tinh luong = so ngay lam * luong 1 ngay
 *      3: in ra man hinh
 * 
 * Output: tinh tien
 */


document.getElementById("totalSalary").onclick = function (){
    //Dau vao
    var salaryPerDay = document.getElementById("salaryPerDay").value*1;
    var workingDay = document.getElementById("workingDay").value*1;
    // xu ly
    var totalSalary = salaryPerDay * workingDay;
    // Dau ra
     var result = "Tiền lương là: " + totalSalary;
     document.getElementById("notifiCation").innerHTML = result;
}



