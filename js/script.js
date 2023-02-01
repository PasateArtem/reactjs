"use strict";

// const str = "text";
// const arr = [1, 2, 6]

// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);


// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit")); /// indexOf() - поиск подстроки

// const logg = "Pytin Huilo and Pidar";

// // console.log(logg.slice(6, 11));
// // console.log(logg.substring(6, 11));
// console.log(logg.substs(6, 11));

// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.99999px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));





// function reverse_a_number(n) {

//     return n.split("").reverse().join("");
//     console.log("20255")
// };

// reverse_a_number("20255")

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 30;
//     console.log(num);
// }

// showFirstMessage("Hellow World");
// console.log(num);
// ///////

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 5));
// console.log(calc(7, 2));
// //////

// function ret() {
//     let num = 50;


//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);
// /////
// const logger = function() {
//     console.log("hellow");
// };

// logger();
// /////
// const calc = (a, b) => {return a + b};
// ////
// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount)
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// ////// test down

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Alex');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str = str + num * i + "---";
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);

// ///

// const uanCurr = 28;
// // const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// // function promotion(result) {
// //     console.log(result * discount);}

// convert(500, uanCurr);


// //// 

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return // код прекращает работу на ретерн
//     }
//     console.log("done") // код не выполняется
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);
// // Не трогаем
// return data;

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// *
// **
// ***
// ****
// *****
// ******

// var lines = line = 5, a=' ', b='*';
// while(line-->0) console.log(Array(line+1).join(a) +Array(2*(lines-line)).join(b) +Array(line+1).join(a));

// const lines = 5;
// let result = '';
// let items = lines,
//      a='',
//         b='*';
// while(lines-->0) console.log(Array(lines+1).join(a) +Array(2*(items-lines)).join(b) +Array(lines+1).join(a));




// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }

//     result += '\n';
// }



// console.log(result);
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const reversed = data.reverse();
// const result = [];
// for (let i = 0; i < reversed.length; i++) {
//     result[i] = reversed[i];
// }

// console.log(result);
// return result;
// console.log(result);
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
    
// }


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             // if (k === 2) continue first;
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


// let num = 10;

// for (let i = 20; i >= 10; i--) {
//     if ( i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// const arrayOfNumbers = [];
// let number = 5;
//     // Пишем решение вот тут
// while (number <= 10)  {
//     arrayOfNumbers.push(number++);
// }
// console.log(arrayOfNumbers)
    
//     // Не трогаем
// return arrayOfNumbers;

// var start = 0;
// var result = [];
// // 2.Создать цикл,который заполнит массив «result» значениями от 100 до 0 включительно при помощи декремента.
// while (start <= 100) {
//     result.push(start++);
// }
// console.log(result);

// for (let i = 2; i <= 10; i++) {
//     if ( i % 2 === 0) {
//         console.log(i);
//     }
// }
// let num = 3;
// while (num <= 16) {
//     console.log(num++);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);


// const hamburher = 5;
// const fries = null;

// if (hamburher && fries) {
//     console.log('ia sit');
// }

// const hamburher = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburher === 3 && cola && fries);


// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'assasacscac');

// if (hamburher === 3 && cola === 1 && fries) {
//     console.log('Vse siti');
// } else {
//     console.log('mi yhodim');
// }


// const hamburher = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburher === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Vse siti');
// } else {
//     console.log('mi yhodim');
// }

// console.log(hamburher === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, semReport, mariaReport = 'done';

// console.log(johnReport || alexReport || semReport || mariaReport)
// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('error!');
// }




// if (num < 49) {
//     console.log('error!');
// } else if (num > 100) {
//     console.log('to match!');
// } else {
//     console.log('ok!');
// }


// (num === 50) ? console.log('ok!') : console.log('error!');


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('error!');
//         break;
//     case 100: 
//         console.log('error!');
//         break;
//     case 52: 
//         console.log('true!');
//         break;
//     default: 
//         console.log('nea ne popal');
//         break;
// }   

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     general: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(5%2);

// console.log(2 + 4 * 2 === 8);


// const isChecked = true,
//         isClose = false;
// console.log(isChecked || !isClose);


// const category = "toys";

// console.log(`https://someurl.com/${category}/5`)


// const user = "artem";

// alert(`Hi, ${user}`);

// const answers = [];


// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers)

// console.log(typeof(answers));
// alert("hello")

// const result = confirm(" are you here");
// const answer = +prompt("Вам есть 18?", "18");

// console.log(answer + 5);
// let number = 4.6;


// console.log(4/0);
// console.log('string' * 9);

// const persone = "Alex";

// const bool = true;

// console.log(something);

// let unt;

// console.log(unt);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name)
// console.log(obj["name"])


// let arr = ['plam.png', 'orange.jpg', 6 , {}]

// console.log(arr[3]);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const obj = {
//     a:50
// }


// obj.a = 10;

// console.log(obj);