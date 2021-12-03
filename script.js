    /* ДЗ-№1 */

let a = prompt ('Введите свое имя')
let b = +prompt ('Введите свой год рождения')
let c = +prompt ('Введите нынешний год')

function obshiy(a, b, c) {
    let itog = ( c - b );
    let obshiy = (' Имя : ' + a  +  ' Ваш возраст : ' + itog)
    return obshiy;  
}

alert(obshiy(a, b, c));
