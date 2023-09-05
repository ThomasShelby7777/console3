var name = prompt('Введите свое имя')
var currentYear = +prompt('Введите нынешний год','XXXX')
var year = +prompt('Введите год свое рождения','XXXX')

console.log(name + ', Ваш возраст ' + (currentYear - year));




var a = +prompt('Введите количество примеров');

function rand(){
    return Math.floor(Math.random() * 20);
}


 
for (i = 0; i < a; i++) {
    let b = rand();
    let c = rand();
    if (b >= 0 && b <= 5) {
        var sum = b + c;
        var d = +prompt("Дайте правильный ответ: " + b + "+" + c + "=");
    } else if (b >= 6 && b <= 10) {
        if (b < c) {
            let tmp
            tmp = b
            b = c
            c = tmp
        }
        var sum = b - c;
        var d = +prompt("Дайте правильный ответ: " + b + "-" + c + "=");
    } else if (b >= 11 && b <= 15) {
        var sum = b * c;
        var d = +prompt("Дайте правильный ответ: " + b + "*" + c + "=");
    } else if (b >= 16 && b <= 20) {
        if (b < c) {
            let tmp
            tmp = b
            b = c
            c = tmp
        }
        var sum = b / c;
        var d = +prompt("Дайте правильный ответ: " + b + "/" + c + "=");
    }
 
    if (sum == d){
        console.log("Ваш ответ верный - " + sum);
    } else {
        console.log("Ваш ответ не верный - " + d + "!" + " Правильный ответ - " + sum + "!");
    }
}