// МОДУЛЬ 7

// Отримати доступ до кнопки через айді

// const magicBtn = document.querySelector("#magic-btn");
//Створюємо змінну  magicBtn
//Ми звертаємось до нашого document викликпємо у ньго метод querySelector
// querySelector як аргумент передаємо рядок селектор якого ми хочемо отримати "#magic-btn"
// "#magic-btn" - # - означає що ми хочемо отримати рядок за id та magic-btn сам id який у нас в html коді
// console.log(magicBtn);
// Викликаємо змінну і отримуємо кнопку

// <ul> - отримаємо наш список але за класом
// <ul class="benefits-list">

// const navEl = document.querySelector(".benefits-list");
// Тут все те саме що і з кнопкою але щоб звернутись до назви класу ставимо крапку і назву класу .benefits-list
// console.log(navEl);

// Отримати дані за назвою тегу наприклад <ul>
// Тут все те саме що і з кнопкою але щоб звернутись до назви нашого тегу <ul> - передаємо як рядок
// const navEl = document.querySelector("ul");
// console.log(navEl);

//  <li class="benefits-item">
// const itemEl = document.querySelector("header-menu-item");
// benefits-item - якщо в нас цей список не один він знаходить перший і все далі шукати не буде
// console.log(itemEl);

// КОЛИ НАМ ТРЕБА ОТРИМАТИ БАГАТО ЕЛЕМЕНТІВ

// <a class="nav-link" href="">Portfolio</a> - тут ми звертаємось до наших посилань яких у нас багато
// І тому використовуємо метод querySelectorAll далі як
// Аргумент звертаємось через крапку до нашого .nav-link
// const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);

// <ul> - за класом about-list
// const navEl = document.querySelector(".about-list");

// Змінна звертаємось до батьківського елемента navEl і викликати у нього
// властивість firstElementChild - передає перший дочірній елемент який знаходиться в середині
// У консолі ми отримаємо першу НОДУ <li> яка знаходиться в середині батьківського елементу тобто <ul>
// const firstEl = navEl.firstElementChild;

// console.log(firstEl);
// console.log(navEl.lastElementChild);
// lastElementChild - властивість знаходить останній елемент в списку

// Коли нам потрібно отримати весь список елементів <li> які в середині <ul>
// children - відповідає за отримання всього списку  елементів
// console.log(navEl.children);

// Туту ми звертаємось до батьківського елементу navEl викликаємо у ньго властивість children яка
// відповідає за список його нащадків ставимо квадратні дужки та індес [1] до якого елемента ми
// звнртаємось
// const navItem = navEl.children[1];
// console.log(navItem);

// console.log(navItem.nextElementSibling);
// nextElementSibling - данна властивість поверне нам наступну ноду по сиску яка йде після першого індеса

// console.log(navItem.previousElementSibling);
// previousElementSibling - данна властивість поверне нам попередню ноду по сиску

// console.log(navItem.parentNode);
// parentNode - данна властивість поверне нам батьківський елемент тобто <ul> в які вкладений наш список <li>

// ВЗАЄМОДІЯ ІЗ ЗОБРАЖЕННЯМИ

// const img = document.querySelector(".hero-img");
// hero-img - назва класу в якому знаходиться зображення
// Тут копіюється нове посилання на картинку на яку ми хочемо замінити попередню
// img.src = "./images/taste-img1.jpg";
// Тут пишемо альтернативний текст який має завантажитись із новим зображенням
// img.alt = "new photo";

// Звертаємось до класу картинки hero-img
const img = document.querySelector(".hero-img");
// Передаємо посилання на неї ./images/logo.svg
img.src = "./images/logo.svg";
// Викликаємо посилання
console.log(img.src);
// console.log(img);

// Тут звертаємось до заголовка <h1> <h1 class="item">Work at the speed of thought</h1>
// Та хочемо перезаписати його заголовок Work at the speed of thought на новий

const itemEl = document.querySelector(".item");
// console.log(itemEl);

// itemEl.textContent = "New me";
//textContent - дає можливісь читати та перезаписувати заголовок на новий
// itemEl.textContent звертаємось і присвоюємо значення нового заголовку  <h1> на "New me"

// console.log(img.getAllritube("src"));
// getAllritube - цей метод повертає посилання на зображення

img.setAttribute("width", 80);
// setAttribute("width", 80) - цей метод перезапише значення яке ми приймаємо як аргумент "width"
// на значення яке стоїть після коми 80
// Якщо в коді такого значення не має він його створить і присвоїть йому значення яке буде після коми

// Для того щоб видатити атрибут наприклад ширину робимо наступне

img.removeAttribute("width");
// removeAttribute - видаляє атрибут який буде приймати як аргумент

console.log(img.hasAttribute("src"));
// hasAttribute("src") - даний метод перевіряє наявність елементу src в тегу img
// і коли знаходить повертає true якщо не має false

// Ми звертаємось до кнопок які створюються для службового користування action button
// const actions = document.querySelectorAll(".action button");
// Тут ми звертаємось до нашого класу actions і [2] - покажи нам кнопку за другим індексом
// console.log(actions[2].dataset.actions);
// dataset.actions - пишемо датасет та actions і ми отримуємо назву третьої конпки Edit

// Щоб створити або перезаписати атрибут в кнопці потрібно
// btn.dataset.btn = "red";

// ВЗАЄМОДІЯ ІЗ КЛАСАМИ ЕЛЕМЕНТА
//  <a class="header-nav-link" href="/contact">Resources</a> - ми такх у коді маємо 3шт
// тому конкретно звертаємось до цього
// Значення нашого href ми зберігаємо в змінну currentPageUl1 = "/contact"
//Використовуємо шаблонні рядки ставимо крапку назва класу header-nav-link
// Квадратні дужки і в середині передаємо змінну currentPageUl1 якій присвоюється значення "/contact"
// ${currentPageUl1} - в середині фігурних дужок ми конкретизуємо підставляючи назву
// змінної currentPageUl1 в яку ми збурегли значення  href="/contact"
// В консолі ми отримуємо -  <a class="header-nav-link" href="/contact">Resources</a>
const currentPageUl1 = "/contact";
const linkEl = document.querySelector(
  `.header-nav-link[href="${currentPageUl1}"]`
);

// Додаємо клас нашому посиланню <a class="header-nav-link" href="/contact">Resources</a>
linkEl.classList.add("header-nav-link--current");
//Звертаємось до змінної linkEl викликаємо властивість classList в ньго є метод add
//Метод add("header-nav-link--current") приймає як аргумент клас який був header-nav-link і те що
// хочемо додати до ньго --current все в круглих дужках
// ВАЖЛИВО ПЕРЕД НАЗВОЮ КЛАСУ header-nav-link КРАПКУ НЕ СТАВИМО!!!!!!
// ТОМУ ЩО МИ ВІДРАЗУ ПРАЦЮЄМО З КЛАСАМИ classList
console.log(linkEl);

linkEl.classList.remove("header-nav-link--current");
// remove - видаляє класи в дужках вказуємо клас який хочемо видалити "header-nav-link--current"

linkEl.classList.toggle("header-nav-link--current");
// toggle - "header-nav-link--current" якщо він знаходить такий клас він його видаляє
// toggle- "header-nav-link--current" якщо не знаходить такий клас то додає

linkEl.classList.replace("item", "page-title");
// replace - даний метод приймає в себе два аргументи 1-й який ми хочемо видалити 2-й яким хочемо замінити
// 1-й "header-nav-link--current" - видаляємо
// 2-й "header-nav-link-age"- замінюємо

// console.log(linkEl.classList.contains("header-nav-link-age"));
// contains - даний метод перевіряє чи є клас "header-nav-link-age" в нашому посиланні
//Якщо знаходить - true Якщо не знаходить -false Тобто повертає булеве значення

// ДЛЯ СТВОРЕННЯ НОВОГО ЕЛЕМЕНТУ ПОТРІБНО

const titleEl = document.createElement("h1");
// createElement - в данному методі ми вказуємо тег який хочемо створити "h1"
titleEl.classList.add("page-title");
// add - вказуємо назву класу для тегу "h1" тобто "page-title"
titleEl.textContent = "My title";
// textContent - властивість якій присвоюється текст  "My title" який буде знаходитись між
// відкриваючим та закриваючим тегом "h1"
console.log(titleEl);

// Щоб додати наш "h1" наприклад в тег body

// document.body.append(titleEl);
// append(titleEl) - додає наш "h1" в кінець тегу body
// document.body.prepend(titleEl);
// prepend(titleEl) -  додає наш "h1" на початок  тегу body

// const imageEl = document.createElement("img");
// Створюємо тег для нашого забраження
// imageEl.src =
//   "https://img.freepik.com/free-vector/sweet-eyed-kitten-cartoon-character_1308-135596.jpg?t=st=1746949662~exp=1746953262~hmac=3ad33131b39ea49d18cf2a1828a429abebfecd080ef0c76165d6b778f0dc4049&w=740";
// // Передаємо посилання на наше зображення
// imageEl.alt = "Photo cat";
// Альтернативний текст який буде підвантажувати якщо фото не завантажиться
// imageEl.width = 320;
// Задаємо розмір ширини картинки
// document.body.append(imageEl);
//                                       div клас
// const BoxEl = document.querySelector("item-box");
// div з класом "item-box" в середину ньго додаємо зображення
// BoxEl.prepend(imageEl);
// imageEl - ЕЛЕМЕНТ ЯКИЙ МИ СТВОРИЛИ МОЖЕМО ДОДАТИ НА СТОРІНКУ ЛИШЕ ОДИН РАЗ І ЛИШЕ В ОДНЕ МІСЦЕ

// В <ul> хочемо додати ще одну <li>

const navItemEl = document.createElement("li");
navItemEl.classList.add("list-itrm");
console.log(navItemEl);

const navLinkEl = document.createElement("a");
navItemEl.classList.add("header-nav-link");
navLinkEl.textContent = "Profile";
navLinkEl.href = "/profile";

// Тепер ми наш тег <а> - navLinkEl поставити в середину тегу <li> - navItemEl
navItemEl.append(navLinkEl);
// Ми звертаємось до нашого navItemEl де заходиться тег <li>
// append - за допомогою методу в круглі дужки додаємо посилання на наш href а саме navLinkEl
// в якому navLinkEl.href = "/profile";- присоєно значення "/profile"
// У консолі ми отримуємо тег  <li> і в середині тег <а>
console.log(navItemEl);
// Додати наш елемент в наш спивок тобто в тег <ul>
const navEl = document.querySelector(".header-nav-list");
// Ми звертаємося до класу тега  <ul> - ".header-nav-list"
navEl.append(navItemEl);
// navEl - відповідає за тег <ul> метод який додає append і в круглі дужки те що додаємо
// а саме navItemEl - який відповідає за тег <li>
