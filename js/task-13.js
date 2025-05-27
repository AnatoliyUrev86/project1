// МОДУЛЬ 9 ПЕРШЕ ЗАНЯТТЯ
const obj = '{ "a": 5 }';
// Щоб зробити наш об'єкт валіднид для Jsone потрібно
// 1 Преретворити його на рядок  "{ a: 5 }"
// 2 Щоб Jsone був валідним його ключ потрібно огорнути в подвійні лапки "a"
// 3  \"a\" - саме слеш подвійні лапки ключ a слеш подвійні лапки вони екрануєть
// тобто перекривають наш ключ і він стає валідним для Jsone
// Для того щоб перевірити валідніть нам потрібно розпарсити наш об'єкт за допомогою методу parse(obj)
console.log(JSON.parse(obj));
// Ми звертаємось до JSON крапка метод parse і в круглі дужки передаємо назву об'єкта (obj) який хочемо розпарсити
// У консолі ми отримаємо наш  об'єкт  { "a": 5 } ключ "a" та значення 5

// ЛОКАЛЬНЕ СХОВИЩЕ localStorage

const LS_KEY = "Array of name";
const names = ["Alise", "Kate", "Emma"];
//Два параметра      ключ   значення
// localStorage.setItem(LS_KEY, "lalala");
// Звертаємось до localStorage
// Далі метод setItem який приймає в круглі дужки два параметри (ключ, значення)
// localStorage.setItem(LS_KEY, names);
// Щоб отримати дані з нашого localStorage ми використовуємо метод getItem() - цей метод хоче в круглих дужках
// тільки один аргумент назву ключа значення якого ми хочемо отримати LS_KEY
const value = localStorage.getItem(LS_KEY);
// Даний метод getItem витягає із localStorage - значення LS_KEY і отримуємо ми рядок
// В результаті ми отримаємо в консолі рядок "Alise", "Kate", "Emma" хоча клали масив  ["Alise", "Kate", "Emma"]
localStorage.setItem(LS_KEY, JSON.stringify(names));
// JSON.stringify - перетворює наш масив names на рядок
// Щоб наш рядок перетворити на валідний масив пишемо нижче console.log(JSON.parse(value));
console.log(JSON.parse(value));
// (value) - це будуть дані які ми витягнули із нашого localStorage і тепер ми наш рядок отримали у форматі масива
// В localStorage - можуть зберігатися лише рядки тому ми за допомогою  JSON.stringify перетворювали наш масив
// на рядок

// ВИДАЛЕННЯ ДАНИХ ІЗ localStorage
// localStorage.removeItem("Array of names");

// В localStorage хочемо зберегти функцію
// Функції та методи localStorage не зберігаються (thisa + thisb - це для приклду зберігання функцій та методів)

// const form = document.querySelector(".freedback-form");
const STORAGE_KEY = "feedback-msg";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", handalInput);
function handalInput(event) {
  const message = event.target.value;
  populateTextAres();
  // event.target.value Щоб витягнути дані які ввів користувач
  localStorage.setItem(STORAGE_KEY, message);
  // Тут ми перезаписуємо наш localStorage за допомогою setItem і в дужках два аргументи
  // 1-й STORAGE_KEY - куди перезаписуємо
  // 2-й message що саме або з відки зміни повинні перезаписуватися message
  console.log(message);
}

// Створимо функцію яка буде відображати текст на нашій сторінці який вводить користувач в message
// вона буде повертати нам тест в localStorage в textarea якщо там буде текст

function populateTextAres() {
  // ДЛЯ ТОГО ЩОБ ВИТЯГНУТИ ДАНІ ІЗ  localStorage
  // Створюємо змінну куди будемо зберігати результат
  // Звертаємось до нашого localStorage і через метод setItem в дужках назву змінної STORAGE_KEY
  // значення якої хочемо отримати
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  console.log(savedMessage);
  // Якщо наш textarea він же message будуть порожні у консолі буде - null і в цикл  if ми не потрапимо
  // тому що null не має булевого значення
  //Тепер що це перевірити ми звернемось до циклу  if і в круглі дужки передамо назву змінної яку хочемо
  // перевірити savedMessage
  if (savedMessage) {
    textarea.value = savedMessage;
    // Тут ми звертаємось до textarea та його значення value і присвоюємо значення змінної savedMessage
    // куди буде зберігатися текст який вводить користувач в message
    // Якщо текст буде ми потрапимо в конструкцію if якщо ні то нічого не робимо
  }
}

// Щоб наша форма очищалась при відправці даних ми на неї вішаємо слухач подій та
// (сабміт подія яка буде виконувати це та другий аргумент функція яка буде це виконувати)

// form.addEventListener("submit", handalSubmit);
// function handalSubmit(event) {
//   event.preventDefault();
// Для очищення форми після відправки даних пишемо
//   event.currentTarget.reset();
// Для очищення  localStorage  після відправки даних пишемо в дужки передаємо ключ за яким
// ми будемо видаляти дані STORAGE_KEY після відправки
//   localStorage.removeItem(STORAGE_KEY);
// }

// ЗФДАЧА

// В НАС Є ПЕРЕЛІК ТОВАРІВ ЯКІ МИ МОЖЕМО РПИ КУПІВЛІ ДОДАВАТИ В КОРЗИНУ І ПОТРІБНО РЕАЛІЗУВАТИ
// ЩОБ ТОВАРИ ВІДОБРАЖАЛИСЯ В НАШІЙ КОРЗИНІ
// const products = [
//   {
//     id: 7,
//     img: "https://content.rozetka.com.ua/goods/images/big/468886611.jpg",
//     price: 50000,
//     description: "Айфон",
//   },
//   {
//     id: 8,
//     img: "https://content.rozetka.com.ua/goods/images/big/526514729.jpg",
//     price: 40000,
//     description: "Айпад",
//   },
// ];

// const container = document.querySelector(".js-list");
// Створюємо змінну куди будуть додаватися наші продукти в корзину
// const PRODUCT_LS = "basket";
// container.insertAdjacentHTML("beforeend", createMarkup(products));
// Створимо функцію яка буде створювати рядок нашої розмітки

// function createMarkup(arr) {
//   return (
//     arr
// В середині map робимо деструктуризацію нашого об'єкта
// передаючи в круглі дужки ключі значення яких ми хочемо отримати { id, img, price, description }
//   .map(
//     ({ id, img, price, description }) => `
//     <li data-id="${id}" class="product-card js-product">
//     <img src="${img}" alt="${name}"class="product-img">
//     <h2 class="product-title">${name}</h2>
//     <p class="product-description">${description}</p>
//     <p class="product-price">${price} грн</p>
//     <button class="product-add-btn js-add">Add to basket</button>
//     </li>`
//   )
//   .join("")
//   );
// Для того щоб розуміти по якому товару ми клікнули додаємо дата атрибут
// в якому буде зберігатися унікальний id
// }

// Тепер потрібно коли ми товари наші бачимо на сторінці реалізувати додавання їх в корзину
// Тут ми скористаємось делегуванням і слухач події навісимо на наш container
// container.addEventListener("click", handaleAdd);
// Тепер створимо функцію handaleAdd яка буде додавати товар у корзину
// container.addEventListener("click", handaleAdd);
// function handaleAdd(event) {
//   if (!event.target.classList.contains("js-add")) {
//     return;
//   }
//   const product = event.target.closest(".js-product");
//   console.log(product);
// Тепер щоб витягнути значення id нам потрібно створити змінну в яку це буде зберігатися
// з переду ставимо + щоб перетворити наш рядок на число
// const productId = +product.dataset.id;
//   const currentProduct = products.find(({ id }) => id === productId);
// console.log(currentProduct);
//   const products = JSON.parse(localStorage.getItem(PRODUCT_LS) || []);
//   const index = products.findIndex(({ id }) => id === productId);

// if (index !== -1) {
// Тут якщо елемент вже є в корзині ми звертаємось до корзини  products до його елемента
// за [index] додати властивість qty та збільшити його на одиницю += 1
// products[index].qty += 1;
// } else {
// Тут ми до нашого об'єкта  currentProduct додаємо властивість qty = 1 це коли його ще не має в корзині
// а значення ми йому 1 передали
// currentProduct.qty = 1;
// Тут ми додаємо наш об'єкт currentProduct в корзину за неї відповідає products
// products.push(currentProduct);
// }
// Тепер ми повинні оновити наші дані в localStorage
// localStorage.setItem(PRODUCT_LS, JSON.stringify(products));
// 1-ше значення ключ PRODUCT_LS  2-ге значення яе products яке ми презаписуємо в localStorage
// }
// Тепер нам потрібно реалізувати наступне щоб при натисканні на кнопку наш товар додавався в корзину
// Якщо елемент на якому відбувся клік має клас js-add він нас влаштовує якщо ні то ні
// !event.target.classList.contains("js-add")
// Тут ми кажемо що при натисканні знайди елемент із класом js-product тобто наш список  <li>
//  const product = event.target.closest(".js-product");

// Щоб зберегти дані в наш localStorage нам потрібно Створити змінну куди це буде зберігатися  const products
// const products = JSON.parse(localStorage.getItem(PRODUCT_LS) || []);
// Щоб перетворити рядок на валідний масив нам потрібно його розпарсити JSON.parse
// Далі ми звертаємось до localStorage і за домогою методу getItem знаходимо рядок PRODUCT_LS який перетворимо
// у валідний масив
// Потім поставили оператор АБО || якщо не знайдеш  [] - поверни порожній масив
// Також потрібно реалізувати проставлення кількості однакових товарів

// Для того щоб дізнатися чи є у елемента products елемент із  productId із таким Id
// Для цьго створюємо змінну в яку це буде зберігатися
// const index = products.findIndex(({ id }) => id === productId);
// Якщо елемент  productId з таким Id в нашому масиві products метод findIndex поверне нам його index
// якщо не має отримаємо -1

// ДЛЯ КОРЗИНИ З ТОВАРАМИ
// ВАЖЛИВО ЦЕ РОБИТИ ОКРЕМИМ ФАЙЛОМ JS
// const totalPrice = document.querySelector(".js-total-price");
// const clear = document.querySelector(".js-clear");
// const containerEl = document.querySelector(".js-list");
// const PRODUCT_LS = "basket";

// Для того щоб зрозуміти чи додали ми щось в корзину чи ні для цьго ми створемо змінну
// const products = JSON.parse(localStorage.getItem(PRODUCT_LS) || []);
// Створюємо змінну в яку буде зберігатися сума наших покупок let totalCost
// let totalCost;
// Щоб дізнатись чи порожня наша корзина чи ні потрібно звернутися до нашого масиву products
// і записати властивість length
// if (products.length) {
// Звертаємось до кнопки яка має бути коли корзина пона щоб її очистити
// clear.hidden = false;
// Далі ми хочемо порахувати загальну вартість моїх продуктів
// totalCost = products.reduse((acc, { qty, price }) => (acc += qty * price), 0);
// acc += qty * price - це буде проміжне значення акумулятора яке буде зберігатися на наступну ітерацію
// }
// Перевірка
// totalPrice.textContent = totalCost
//   ? `Total cost ${totalCost} грн `
//   : "Your basket is empty";
//   Після того як ми підключили функцію для корзини createMarkup на 225 рядку пишемо те що нижче
// container.insertAdjacentHTML("beforeend", createMarkup(products));
// В нашу змінну totalPrice за допомогою textContent хочемо присвоїти рядок
// В залежності від того що буде в козині якщо пуста Андефайдет
// ? - для цьго використовуємо тернарний оператор потім Шаблонні рядки ``
// Якщо є товар в корзині то `Total cost ${totalCost} грн ` потім двокрапка яка означає в іншому випадку
//Тобто коли корзина пуста виведи рядок "Your basket is empty"

// Для того щоб наповнити нашу корзину продуктами ми створемо функцію
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ img, name, qty, price }) => `
//         <li class="cart-item">
//         <img src="${img}" alt="${name}"class="product-img">
//         <h2>${name}</h2>
//         <p>Quantity: ${qty}</p>
//         <p> Total price: ${qty * price} грн</p>
//         </li>`
//     )
//     .join("");
// }

// ДЛЯ ТОГО ЩОБ ПРИ НАТИСКАННІ НА КНОПКУ НАША КОРЗИНА ОЧИЩАЛАСЬ ПИШЕМО НАСТУПНЕ
// clear.addEventListener("click", handleClick);
// function handleClick() {
//   localStorage.removeItem(PRODUCT_LS);
// localStorage.removeItem - тут звертаємось до localStorage та методу який очищає removeItem
// і в дужках вказуємо за яким ключем PRODUCT_LS потрібно очистити дані
// window.location.href = "./03-shop.html";
// window.location.href - це ми пишемо для того щоб з порожньої корзини нас прекидало на основну сторінку
// "./03-shop.html" - в лапки ми передаємо посилання на html документ де розмітка на нашу основну сторінку
// з товарами саме її треба передавати тут назва файла в даний момент але це як приклад
// }
// Імпортуємо функцію add task-13.js із файлу task-14.js
// import add from "./task-14";

// console.log(add(2, 3));
