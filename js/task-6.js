// Задача

// Напиши скрипт який виводить телефон та номер користувача. Вивксти у консоль імя та телефон

// const names = "jacob,William";
// const phones = "380977775566,380683332299";
// const nameArr = names.split(",");
// console.log(nameArr);

// До модуля 6 кінець

//Якщо наша функція викликається не в суворому режимі то у консолі ми отримаємо Window;
// Якщо в суворому режимі "use strict" то undefined

// const objC = { c: "objC" };
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj
// const objB = Object.create(objC);
// objB кажемо твоїм прототипом буде objC за допомогою Object.create
// objB.b = "objB";

// const objA = Object.create(objB);
// objА кажемо твоїм прототипом буде objВ за допомогою Object.create
// objA.a = "objA";
// objA.a - об'єкт А. з ключем а
// console.log(objA);
// console.log(objB);
// console.log(objA.c);

// Задача

// Написати програмне забезпечення для авто
// Створи об'єкт з методами за швидкість за модель

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     acclerate() {

//     }
// }

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamont", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Emerald", price: 800, quantity: 2 },
//   ],
// };

// calcTotalPrice(stoneName) {
//     const stone = this.stones.find(item => item.name === stoneName);
//     if (!stone) {
//         return `${stoneName}`;
//     }
//     return stone.price * stone.quantity;

// }

// console.log(chopShop.calcTotalPrice("Sapphire"));
//           параметри
// function add(a, b, arr) {
//   console.log("add", this);
//   console.log(a, b, arr);
// }

// const objA = {
//   a: 5,
//   b: 10,
// };

// const objB = {
//   x: 15,
//   y: 100,
// };

// add.call(objA);
// objA - першим аргументом буде той об'єкт який буде контекстом у нашій фунції
// add.call(objB, 5, "tototo", [1, 2]);
// a - 5 b - "tototo"   arr -  [1, 2] - після об'єкта ми як аргументи передаємо значення наших параметрів

// add.apply(objB, [100, "lalala", [10, 20]]);
// apply - після об'єкта ми як аргументи передаємо значення наших параметрів але вкладаємо їх у масив

function changeColor(color) {
  console.log(this);
  // Звертаємось до параметра color і кажемо присвой якесь значення color яке нам буде приходити нове
  this.color = color;
}

const hat = {
  color: "black",
};

const sweater = {
  color: "green",
};
const changeHutColor = changeColor.bind(hat, "red");
//changeHutColor - нова змінна куди буде зберігатися результат
// changeColor.bind - звертаємось фо функції крапка метод bind
// hat, "red"- звертаємось до об'єкта hat кома і присвоюємо новий колір "red" який буде відображатись під час виклику
// функції changeHutColor();
// changeHutColor();
// console.log(hat);

const changeSweaterColor = changeColor.bind(sweater, "blue");
changeSweaterColor();

