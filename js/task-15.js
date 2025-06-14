// МОДУЛЬ 10 ПЕРШЕ ЗАНЯТТЯ
// А синхроний код - це код на виконання якого потрібен не визначений час
// А синхроний метод setTimeout() приймає в себе два параметри
// setTimeout(() => { }, 2000);
// 1-й ()=>{} - колбек або стрілочна функція яка передається в іншу функцію як аргумент
// 2-й 2000 - це час в  мілі секундах він потрібен для того щоб наш метод setTimeout запустив функцію ()=>{}
// передану як перший аргумент саме через цей проміжок часу тобто через 2000 мілі секунд
// console.log("a");
// setTimeout(() => {
//   console.log("time-1");
// }, 2000);
// console.log("a");
// setTimeout(() => {
//   console.log("time-2");
// }, 2000);

// console.log("c");
// Результат у консолі буде з початку а потім с потім time хоча time мав би бути другим але відпрацював останнім
// все відбувається тому що наш метод setTimeout а синхронний
// Якщо ми додамо ще одну функцію із time-2
// Якщо в time-1 і time-2 час виконання різний то вони будуть виконуватися по черзі а коли час однаковий то
// в такому випадку вони виконуються по черзі з початку time-1 потім  time-2 якщо в них час буде різний то
// виконуватися буде першим той час якого для виконання менший

// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => {
//     console.log(i);
//   }, delay);
// }
// i-- це означає що значення i після множення на 1000 буде зменшуватися з початку буде 3000 потім 2000 тобто
// 3 та 2 мілі секунди для виконання коду

// Якщо виникає питання припинити передчасне виконання нашого setTimeout для цього
// const logger = () => {
//   console.log("hello");
// };
// setTimeout(logger, 2000);
// З початку ми створюємо стрілочну функцію logger
// Потім звертаємось до методу setTimeout і як агументи передаємо нашу функцію logger ставимо кому і кажемо
// виконайся через 2000 мілі секунд logger - якщо функція у нас зовнішня ми передаємо на неї посилання
// Для того щоб зупинити наш setTimeout - під час виклику повертає свій унікальний ідентифікатор id
// Створюємо змінну куди передаємо наш унікальний id - виконання нашого setTimeout
// const id = setTimeout(logger, 2000);
// clearTimeout(id);
// В змінну id = setTimeout(logger, 2000) ми зберегли унікальний ідентифікатор виконання нашого setTimeout
// і ми знаємо що id нашого setTimeout зберігаються в змінній
// Щоб зупинити наш setTimeout ми пишемо clearTimeout і в круглі дужки передаємо id того setTimeout який ми
// хочемо зупинити

// Якщо ми хочемо отримати значення із нашої функції logger параметр name ми під час виклику використовуємо
// const logger = (name) => {
// Тут так само через кому передаємо другий параметр (name,age)
// Шаблонні рядки в них передаємо рядок hello і значення ${name} яке хочемо отримати якщо нам потрібно ще якийсь
// парамерт ми його можемо передати через кому наприклад ${age}
//   console.log(`hello ${name}`);
// }
// І під час виклику setTimeout ми як 3-й аргумент передаємо значення name тобто рядок "Alise" і те саме тут ми далі
// через кому передаємо age значення 25
// setTimeout(logger, 1000, "Alise");
// Так само можемо в круглі дужки передавати об'єкти і відразу робити деструктуризацію як при створенні так і при
// виклику

// const logger = (name) => {
//   console.log(`hello ${name}`);
// };

// console.log("before");
// const inervalId = setInterval(logger, 2000, "Kate");
// setInterval - буде через певний проміжок часу 2000 мілі секунд буде запускати нашу колбек функцію logger
// І у консолі ми що разу будемо отримувати hello Kate він буде запускати постійно поки це не припинемо
// clearInterval(inervalId);
// Щоб припинити виконання викликаємо метод clearInterval і пепедаємо як аргумент де ми хочемо припинити виконання
// inervalId - назву змінної де збережене виконання нашого setInterval
// console.log("after");

// Можемо зробити інший запис
// setInterval(() => {
//   clearInterval(inervalId);
// }, 5000);
// В данному випадку ми в setInterval прописали Колбек функцію в її тілі прописали припинення виконання clearInterval
//  в нашій змінній inervalId і вказали час 5000 мілі секунд Тобто вона виконається а через 5000 мілі секунд
// припинить свою роботу

// const notification = document.querySelector(".js-alert");
// Створюємо функцію showNotification яка в своєму тілі буде звертатися до нашого елемента notification і додавти
// елементу notification якийсь клас Щоб додати клас звертаємось до нашого елемента notification потім
// classList.add("is-visible") і в дужках клас який хочемо додати
// let timerId = null;
// function showNotification() {
//   notification.classList.add("is-visible");
//   timerId = setTimeout(() => {
//     console.log("hide");
//     hideNotification();
//     notification.classList.remove("is-visible");
//   }, 3000);
// }
// Щоб було видно потрібно викликати функцію
// showNotification();

// Нехай вікно яке у нас з'явилося після виклику функції showNotification(); ховається через певний час
// ми в середині нашої функції showNotification пришемо метод setTimeout потім клас до якого
// ми звертаємось classList.add("is-visible") потім очищаємо notification.classList.remove("is-visible")
// і час на виконання  3000 мілі секунд

// Тепер потрібно реалізувати щоб при кліку на елемент він ховався
// notification.addEventListener("click", onNotificationClick);
// function onNotificationClick() {
//   notification.classList.remove("is-visible");
// }

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timerId);
// }
// Функція onNotificationClick повинна брати цей код і notification.classList.remove("is-visible"); і
// видаляти цей "is-visible" клас при натисканні на наш елемент
// Тепер створюємо ще одну функцію яка буде виконувати функцію видалення а в місцях де це видалення
// потрібно ми будемо її викликати hideNotification()
// function hideNotification() {
//   notification.classList.remove("is-visible");
// }

// Потім ми створюємо змінну в яку присвоюємо значення let timerId = null; і потім ми timerId = setTimeout
// timerId присвоюємо значення нашому методу setTimeout
// І в timerId буде присвоєно унікальний ідентифікатор цього setTimeout

// Потім ми припиняємо роботу нашого setTimeout прописуємо clearTimeout(timerId) і в круглих дужках передаємо
// унікальний ідентифікатор цього setTimeout

// Робота з датами
// const currentDate = new Date();
// Щоб створити екземпляр класу викорстовуємо ключове слово new і назва класу екземпляр якого ми хочемо
// створити  Date()- якщо в круглі дужки Date ми нічого не передаємо то отримаємо
// поточну дату на той час коли ми це напишемо
// console.log(currentDate);
// У консолі ми отримаємо дату та час після виклику console.log(currentDate);

// У цього нового екземпляру класу new Date() є цікаві методи
// const day = currentDate.getDay();
// console.log(day);
// Ми тут звертаємось до екземпляру currentDate нашої дати і викликаємо метод getDay() - він повертає нам у консоль
// день тижня починаючи з неділі і нуля наприклад 4-й день

// Тут ми отримуємо число місяця
// const date = currentDate.getDate();
// console.log(date);

// Тут ми отримаємо який місяць по рахунку йде
// const month = currentDate.getMonth();
// console.log(month);

// Написати таймер який буде запускати ти зупиняти відлік часу
const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[ data-action-stop]");
// [ data-action-stop] - щоб отримати елемент саме за цим атрибутом
// Тепер створюємо нашу  змінну куди де ми будемо отримувати наш відлік часу
const clockface = document.querySelector(".clockface");

// Створюємо клас Timer
class Timer {
  constructor() {
    // Створюємо властивість за допомогою constructor  яка буде відповідати за те чи запущений наш
    //  Timer чи ні
    this.isActive = false;
  }
  // Щоб запускати нашу кнопочку створемо медод  start
  start() {
    // Ми створюємо змінну яка буде відображати кількість мілі секунд яка пройла після натискання
    // кнопки і виклику методу start() - Date.now()
    const stsrtTime = Date.now();
    startBtn.addEventListener("click", timer.start.bind(timer));
    // Тепер ми хочемо через кожну секунду отримувати нове значення Date.now() для цьго нам допоможе метод
    //  setInterval
    setInterval(() => {
      // Створюємо змінну куди будемо отримувати яка кількість мілі секунд пройла через кожну секунду
      const currentTime = Date.now();
      // Тепер створюємо змінну куди будемо відображати різницю часу при натисканні на кнопку stsrtTime
      // і після цьго як вона спрацювала currentTime currentTime - stsrtTime
      const deltaTime = currentTime - stsrtTime;
      console.log(deltaTime);
    }, 1000);
    //   Тепер ми перевіряємо чи хоча б один раз наш медод start був запущений ми потрапимо в середину нашого
    //   циклу  if
    if (this.isActive) {
      return;
    }
    //   Тепер якщо функція не була запущена жодного разу ми потрапляємо в цикл if і пишемо нижче
    this.isActive = true;
    //   Тепер нам треб зрозуміти скільки в цих мілі секундах які ми запустили годин та хвилин
    // const time = getTimeComponents(deltaTime);
    //   Створюємо змінну time  в якій буде метод getTimeComponents який буде приймати кількість
    // мілі секунд deltaTime
  }
  getTimeComponents(time) {
    //   Створюємо змінну для годин
    const hours = time % (1000 * 60 * 60 * 24);
    //   Створюємо змінну яка буде відповідати за хвилини
    const mins = Math.floor(time % (1000 * 60 * 60)) / (1000 * 60);
    // Тут ми розраховуємо хвилини та секунди
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    //    Math.floor - щоб округлити мілі секунди до секунд і беремо при цьому все в дужки
    console.log(mins, secs);
    //   ПИТАННЯ ЧОМУ В КОНСОЛІ ПОМИЛКА ПІСЛЯ ЗАПУСКУ  - ВТРАТА КОНТЕКСТУ
  }
}

// Створемо екземпляр нашго класу Timer
const timer = new Timer();
// Тепер ми вішаємо наш слухач подій addEventListener на натискання кнопки старт  timer.start
// startBtn.addEventListener("click", timer.start);
// ПОМИЛКА ПІСЛЯ ЗАПУСКУ - щоб виправити помилку тут потрібно перезаписати тобто передати посилання на функцію з
// прив'язаним контекстом bind(timer)
// startBtn.addEventListener("click", timer.start.bind(timer));
