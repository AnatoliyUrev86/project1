// МОДУЛЬ 7 ЧАСТИНА 2
/* <button class="js-click">Click me</button> */
/* <div class="js-box box"></div> */
// Звертаємось до                 класу кнопки
const btn = document.querySelector(".js-click");
// .querySelector(".js-click") - тут зберігається посилання на наш елемент
// Звертаємось до                   класу div
const box = document.querySelector(".js-box");
// Для того щрб мати можливість взаємодіяти з нашою кнопкою тиснути і щоб відбувалась якась дія
// btn.addEventListener("click") - ми цей метод викликаємо на тому елементі на якому хочемо
// відслідковувати події в даному випадку на кнопці btn
// btn.addEventListener("click", () => {
// 1-й аргумент це дія яку ми хочемо побачити "click"
// 2-й аргумент це колбек або стрілочна фунція () => яка буде виконуватись при натисканні на кнопку
console.log("ok");
// });
// Замість () => ми передаємо посилання на звнішню фунцію handleClick - як 2-й аргумент
btn.addEventListener("click", handleClick);
box.addEventListener("click", handleClick);
// Також можемо створити зовнішю функцію
// Тепер ми хочемо щоб при натисканні на кнопку значення числове збільшувалось на 50 для цього
let step = 0;
// Створюємо змінну якій присвоюємо початкове значення let step = 0;
function handleClick() {
  //   console.log("ok");
  // В середині нашої функції звертаємось до нашої змінної і кажемо збільшуй значення після
  // натискання на 50 тобто  step += 50;
  step += 50;
  //   console.log(step);
  // Тепер ми хочемо щоб при натисканні на кнопку наша кнопка рухалась
  box.style.marginTop = `${step}px`;
  // Звертаємось до нашого  box крапка властивість style потім marginTop - рухатись в верх
  // Задаємо значення через шаблонні рядки  `${step}px` звертаючись до  step += 50 за фігуні дужки px
  box.style.marginLeft = `${step}px`;
}

// РОБОТА З <input>

const checkbox = document.querySelector(".js-checkbox");
// checkbox - це маленький квадратик який біля нашого рядка <input> на який ми ставимо галочку і у консолі
// буде відображатись "ok"- значення яке присвоїли
// Тут ми звертаємось до checkbox і викликаємо подію яка нам потрібна
// Коли ми тиснемо на checkbox відпрацьовує подія "change"
checkbox.addEventListener("change", () => {
  // () => - стрілочна функція буде відпрацьовувати в момент натискання на checkbox
  console.log("ok");
});

const userName = document.querySelector(".js-user-mane");
