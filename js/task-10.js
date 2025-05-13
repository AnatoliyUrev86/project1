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

const form = document.querySelector(".js-form");
form.addEventListener("submit", handleSubmit);
// Подія яка відбувається у form називається "submit"
function handleSubmit(event) {
  // Функція handleSubmit - яка буде відпрацьовувати при настанні події
  // Коли іде відправка даних тобто подія "submit"  за замовчуванням сторінка
  // перезавантажується - але так не має бути
  event.preventDefault();
  //В об'єкта події  event.викликається метод - preventDefault() - який прибирає дефолтне оновлення сторінки
  // після відправки даних
  //   console.log("submit");
  console.dir(event.currentTarget.elements);
  // currentTarget - данна властивість дає можливість побачити властивості наших елементів
  console.log(elements.password.value);
  // elements - тепер до наших елементів за ключами можна звертатися
  // elements.password - через подію звертаємось до елемента password і у консолі отримуємо посилання на нього
  // password.value - коли ми запишемо після password value - то будемо отримувати данні які вводить користувач
  // Створюємо об'єкт в якому присвоюємо значення полів які буде вводити користувач
  const info = {
    // ключ  елемент пошта значення яке введе користувач - elements.email.value
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value,
  };
  console.log(info);
  // Для того щоб форма очистилася після того як користувач заповнив і щоб міг заповнювати інший пишемо
  event.target.reset();
  // reset() - даний метод очищає поля "input" після заповнення
}

form.addEventListener("submit", foo);
// foo - функція передається як колбек тобто другим аргументом
// foo ця функція отримає в себе об'єкт подій - (event)
function foo(event) {}

// ТИПИ ПОДІЙ
// keypress, keydown, keyup - це якщо ми хочемо відслідковувати натискання клавіш
// Ми вішаємо на наш документ один із слухачів подій - keypress, keydown, keyup

document.addEventListener("keyup", handleKeyPress);
// keypress - відслідковує натиснення клавіш але не спец клавіш типу Ctrl якщо їх натискати нічого не буде
// keyup - працює тоді коли ми кнопку відпускаємо із спец клавіш типу Ctrl працює
// keydown - буде працювати в той момент коли ми натискаємо клавіші
function handleKeyPress(event) {
  console.log(event.code);
}

// event - в нашому об'єкті подій коли спрацьовує keypress, keyup, keydown є дві влістивості
// key та code
//  console.log(event.key);
// key - коли ми до неї звертаємось літери відображаються у нижньому рнгістрі але варто
// натиснути спец клавішу Shift літери перемикаються у верхній рнгістр також враховує мову
//  console.log(event.code);
// code - ми отримуємо код наших клавіш ні з мовами ні з регістрами він не працює

// Приклад хочемо відслідкувати коли корстувач натискає клавішу Ctrl

document.addEventListener("keydown", handleKey);

function handleKey(event) {
  if (event.ctrlKey && event.code === "KeyC") {
    console.log("ok");
    // event.preventDefault();- він відключає дифолтну поведінку тобто в данному випадку копіювання
    //   при комбінації клавіш ctr+C копіювання відбуватися не буде
  }
}

// ТЕПЕР ЯКІ МАНІПУЛЯЦІЇ МОЖУТЬ БУТИ З МИШЕЮ
