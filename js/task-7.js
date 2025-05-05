// МОДУЛЬ 6
// "use strict";
function add() {
  console.log(this);
}
// this - функція отримує під час виклику і бере його з того об'єкта який стоїть з ліва в данному випадку
// з ліва від add(); нічого не має тому ми посилаємось на нашу глобальну сутність Window
add();
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
