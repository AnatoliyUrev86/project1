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

// Тут ми звертаємось до класу нашого <input> js-user-mane
//                                       В дужках передається посилання на наш об'єкт
// const userName = document.querySelector(".js-user-mane");
// Як аргумент мишемо "input" і () => функція яка буде відпрацьовувати коли в наш  "input" будуть
// вноситись якісь зміни після цього треба клікнути за межами "input"
// Скільки літер вводиться в середину нашого "input"
//Стільки разів "ok" і відпрацює у консолі
// userName.addEventListener("input", (event) => {
// "input" - дає можливість отримувати актуальні дані коли в середині нього щось вводиться
// Для того щоб з нашого "input" отримувати актуальні дані
// Ми в нашу (event) => передаємо event - це об'єкт події нашого методу addEventListener
//event - має багато властивостей нас цікавить target - в ньому зберігається <input js-user-mane>
//Коли ми звертаємось event.target - ми отримуємо посилання на наш елемент ".js-user-mane"
// В target є властивість value - в якій зберігається поточне значення нашого <input>
//   console.log("ok");
//   console.log(event.target.value);
// event.target.value - під час виклику ми вводимо все разом і тепер коли користувач буде
// вводити дані в нашому <input> вони будуть всі відображатись у консолі
// });

// userName.addEventListener("focus", () => {
// "focus" - використовуючи фокум тепер коли ми наводимо мишу на наш  "input" "ok" - відпрацьовує у консолі
// Замість "focus" можна написати подію "blur" і далі все те саме
// то буде відпрацьовувати "ok" коли ми будемо клікати за межами "input"
//   console.log("ok");
// });

// Задача
// Користувач вводить ім'я після втрати focus отримує alert з повідомленням привітання

//                       Функція  handBlur передається як посилання
// userName.addEventListener("blur", handBlur);

// function handBlur(event) {
//   const name = event.target.value;
//event - це подія позначається
//target - зберігається посилання на об'єкт до якого ми звертаємось
//value - значення яке буде вводити користувач
//   alert(`Hello ${name}`);
// ${name} - name - це буде значення імені яке введе користувач
// }

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", handleSubmit);
// Подія яка відбувається у form називається "submit"
// function handleSubmit(event) {
// Функція handleSubmit - яка буде відпрацьовувати при настанні події
// Коли іде відправка даних тобто подія "submit"  за замовчуванням сторінка
// перезавантажується - але так не має бути
//   event.preventDefault();
//В об'єкта події  event.викликається метод - preventDefault() - який прибирає дефолтне оновлення сторінки
// після відправки даних
//   console.log("submit");
//   console.dir(event.currentTarget.elements);
// currentTarget - данна властивість дає можливість побачити властивості наших елементів
//   console.log(elements.password.value);
// elements - тепер до наших елементів за ключами можна звертатися
// elements.password - через подію звертаємось до елемента password і у консолі отримуємо посилання на нього
// password.value - коли ми запишемо після password value - то будемо отримувати данні які вводить користувач
// Створюємо об'єкт в якому присвоюємо значення полів які буде вводити користувач
// const info = {
// ключ  елемент пошта значення яке введе користувач - elements.email.value
//   email: elements.email.value,
//   password: elements.password.value,
//   comment: elements.comment.value,
// };
// console.log(info);
// Для того щоб форма очистилася після того як користувач заповнив і щоб міг заповнювати інший пишемо
// event.target.reset();
// reset() - даний метод очищає поля "input" після заповнення
// }

// form.addEventListener("submit", foo);
// foo - функція передається як колбек тобто другим аргументом
// foo ця функція отримає в себе об'єкт подій - (event)
// function foo(event) {}

// ТИПИ ПОДІЙ
// keypress, keydown, keyup - це якщо ми хочемо відслідковувати натискання клавіш
// Ми вішаємо на наш документ один із слухачів подій - keypress, keydown, keyup

// document.addEventListener("keyup", handleKeyPress);
// keypress - відслідковує натиснення клавіш але не спец клавіш типу Ctrl якщо їх натискати нічого не буде
// keyup - працює тоді коли ми кнопку відпускаємо із спец клавіш типу Ctrl працює
// keydown - буде працювати в той момент коли ми натискаємо клавіші
// function handleKeyPress(event) {
//   console.log(event.code);
// }

// event - в нашому об'єкті подій коли спрацьовує keypress, keyup, keydown є дві влістивості
// key та code
//  console.log(event.key);
// key - коли ми до неї звертаємось літери відображаються у нижньому рнгістрі але варто
// натиснути спец клавішу Shift літери перемикаються у верхній рнгістр також враховує мову
//  console.log(event.code);
// code - ми отримуємо код наших клавіш ні з мовами ні з регістрами він не працює

// Приклад хочемо відслідкувати коли корстувач натискає клавішу Ctrl

// document.addEventListener("keydown", handleKey);

// function handleKey(event) {
//   if (event.ctrlKey && event.code === "KeyC") {
//     console.log("ok");
// event.preventDefault();- він відключає дифолтну поведінку тобто в данному випадку копіювання
//   при комбінації клавіш ctr+C копіювання відбуватися не буде
//   }
// }

// ТЕПЕР ЯКІ МАНІПУЛЯЦІЇ МОЖУТЬ БУТИ З МИШЕЮ

// const boxEl = document.querySelector(".js-box");
//                                   посилання на функцію як другий аргумент
// boxEl.addEventListener("mouseenter", onMouseEnter);
//                                   посилання на функцію як другий аргумент
// boxEl.addEventListener("mouseleave", onMouseLeave);

// mouseenter - це слухач події для миші там де він пдключений ми клікаємо на об'єкт відпрацьовує подія
// mouseleave -  це слухач події для миші коли ми клікаємо за межами об'єкт спрацьовує він

// function onMouseEnter(event) {
//   const myBox = event.target;
//   myBox.classList.add("box-active");
// Тут коли ми будемо заходити мишею на елемент наш клас box-active буде додаватися
// }

// function onMouseLeave(event) {
//   const myBox = event.target;
//   myBox.classList.remove("box-active");
//  Тут коли ми будемо заходити мишею на елемент наш клас box-active буде видалятися за рахунок методу remove
// }

// boxEl.addEventListener("mouseenter", onMouseOver);
// onMouseOver - чутливий до кордону вкладеного в нього елемента
// boxEl.addEventListener("mouseleave", onMouseOut);

// function onMouseOver() {
//   console.log("onMouseOver");
// }

// function onMouseOut() {
//   console.log("onMouseOut");
// }

// boxEl.addEventListener("mousemover", onMouseMover);
// mousemover - відпрацьовує під час кожного переьіщення курсору миші по елементах до яких він підключений
// function onMouseMover(event) {
//   console.log(event);
// }

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://media.istockphoto.com/id/459014029/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-audi-a6-%D1%87%D0%B0%D1%80%D0%BB%D1%8C%D1%81%D1%82%D0%BE%D0%BD-%D1%81%D1%88%D0%B0.jpg?s=612x612&w=0&k=20&c=3pyF2PeTFIEBSbKjgQk66rEmDWytbH2rshBwBBFtK9Q=",
  },
  {
    id: 2,
    car: "Bmw",
    type: "X5",
    price: 40000,
    img: "https://baza-gai.com.ua/catalog-images/bmw/x5/model.jpg",
  },
  {
    id: 3,
    car: "Subaru",
    type: "B9",
    price: 50000,
    img: "https://cdn3.riastatic.com/photosnew/auto/photo/subaru_tribeca__597365583fx.jpg",
  },
];

const form = document.querySelector(".js-form");
const container = document.querySelector(".js-list");

function createMarkup(arr) {
  return arr
    .map(
      (car) => `
            <li class="car-card" data-id="${car.id}">
            <img src="${car.img}" alt="${car.type}" class="car-image">
            <h2 class="car-title">${car.car}</h2>
            <h3 class="car-type">${car.type}</h3>
            <span class="car-price">${car.price}</span>
            </li>
            `
    )
    .join("");
}
// console.log(createMarkup(cars));

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "25px";

container.insertAdjacentHTML("beforeend", createMarkup(cars));

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  //   console.dir(event.target);
  const elements = event.target.elements;
  //   console.log(elements);
  const query = elements.query;
  // console.log(elements.query.vaiue);
  const result = cars.filter((item) =>
    item[option.value].toLowerCase().includes(query.value.toLowerCase())
  );
  console.log(result);
}
