// МОДУЛЬ 6
// "use strict";
// function add() {
//   console.log(this);
// }
// this - функція отримує під час виклику і бере його з того об'єкта який стоїть з ліва в данному випадку
// з ліва від add(); нічого не має тому ми посилаємось на нашу глобальну сутність Window
// add();

// const user = {
//   userName: "Alise",
//   showThis() {
//   showThis() - метод створений в середині об'єкта user
//     console.log(this);
//   },
// };
// user.showThis() - для того щоб викликати метод showThis() ми звертаємось до нашого об'єкта user
// user.showThis();
//  this - отримує посилання на  під час виклику на об'єкта який стоїть з ліва user

// const user = {
//   userName: "Alise",
//   showThis() {
//     console.log("showThis", this);
//     const add = () => {
//       console.log("add", this);
// this в стрілочній функції візьме область видимості із батьківського елементу тобто з методу  showThis
//     };
//     add();
//   },
// };

function showName() {
  console.log(this);
  console.log(this.userName);
}

const user = {
  userName: "Kate",
};
//  посилання на функцію
user.showName = showName;
console.log(user.showName);
// Під час виклику запуститься функція showName але в контексті (this) user тому що він стоїть з ліва під час виклику
user.showName();

