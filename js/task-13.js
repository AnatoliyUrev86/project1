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

form.addEventListener("submit", handalSubmit);
function handalSubmit(event) {
  event.preventDefault();
  // Для очищення форми після відправки даних пишемо
  event.currentTarget.reset();
  // Для очищення  localStorage  після відправки даних пишемо в дужки передаємо ключ за яким
  // ми будемо видаляти дані STORAGE_KEY після відправки
  localStorage.removeItem(STORAGE_KEY);
}
