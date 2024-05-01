"use strict"

// 1.Що потрапить в консоль? 
// let someVar = 0;
// ++someVar;
// if (someVar) {
// console.log(someVar);
// }
// Відповідь: 
//1. let someVar = 0; задається змінна із значенням 0;
//2. Змінна інкрементується (збільшується на одиницю) і приймає значення 1;
//3.//if (someVar) - ставиться умова: якщо змінна повертає значення true(а 1 повертає true),то console.log(someVar) - вивести цю змінну в консоль. 
//В консоль виведеться 1.



// 3.Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
//     console.log('000');
// }
// Відповідь: 1. дивимся чи умови true/false: if(false || false && true || false);
//2. if (false або false та true або false) нам потрібно,щоб після порівняння загальний результат в дужках був true.
//3. Ми маємо один true, але попередня умова вимагає щоб її значення теж було true,щоб умова була виконана,тому
//нічого не потрапить так як умова не виконана(false)



// 4.Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// PS. Не знаю,як зробити,щоб не повертала помилку
let string2 = "Результат ділення: "

function getDiv(a = 0, b = 0) { return a / b; }
function showMessage(result) {

    if (isNaN(result) || result == 'Infinity' || result == '-Infinity') { console.log("") }
    else { console.log(string2 + result) }
}
showMessage(getDiv(1, 1))






// 4. Створіть функцію sumArray, яка приймає масив чисел та повертає їхню суму. Виведіть результат роботи цієї функції для масиву чисел [1, 2, 3, 4, 5].
//PS Це теж не сам робив
function sumArray(arr) {

    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        total += arr[i];
    }
    return total;
}

let array = [1, 2, 3, 4, 5]
let result = sumArray(array);
console.log(result);




// 6. Створіть функцію multiplyArray, яка приймає масив чисел та множник, та повертає новий масив, в якому кожен елемент масиву помножений на цей множник. Виведіть результат роботи цієї функції для масиву [1, 2, 3, 4, 5] та множника 3.

function multiplyArray(arr, x = 0) {

    let newArray = []
    for (let i = 0; i < arr.length; ++i) {
        newArray.push(arr[i] * x);
    }
    return newArray
}
let originArray = [1, 2, 3, 4, 5,]
let multiply = multiplyArray(originArray, 3)
console.log(multiply)

