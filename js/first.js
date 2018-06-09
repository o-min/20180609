//●●入力された値をアラートで表示する
function callAlert(){
    var value1 = document.getElementById('imput1').value;
    alert(value1);
}
//●2つの値に入力された内容で計算を行う
function calc(type){
    var num1 = parseInt(document.getElementById('inputNum1').value);
    var num2 = parseInt(document.getElementById('inputNum2').value);
    var total;
    switch(type){
        case 1:
            total = num1 + num2;
            break;
        case 2:
            total = num1 - num2;
            break;
        case 3:
            total = num1 * num2;
            break;
        case 4:
            total = num1 / num2;
    }
    alert('計算結果は' + total + 'です');
}
//●フェードイン・フェードアウト
function fade(){
    $("#fade-swich").click(function(){
        $("#fade").fadeout();
    });
};