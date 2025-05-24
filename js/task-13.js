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

const form = document.querySelector(".freedback-form");

const textarea = document.querySelector("textarea");
textarea.addEventListener("input", handalInput);
function handalInput(event) {
  console.log(event.target.value);
  // event.target.value Щоб витягнути дані які ввів користувач
}