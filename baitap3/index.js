/**
 * Input: giá USD, số tiền usd -> vnd
 *      
 * Process:
 * 
 *      1. Lấy input
 *      2. Tính tiền: Số tiền usd * 23.500(giá usd -> vnd)
 *      3.In ra màn hình 
 *      
 * Output: Tính tiền
 */

document.getElementById("totalMoney").onclick = function (){
    // Dau vao
    var priceUsd = 23500;
    var moneyUsd = document.getElementById("moneyUsd").value*1;
    // Xu ly
    var totalMoney = priceUsd * moneyUsd;
    // Dau ra
    var result = "Số tiền là: " + totalMoney;
    document.getElementById("notifiCation").innerHTML = result;
}