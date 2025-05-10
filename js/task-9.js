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

itemEl.textContent = "New me";
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
