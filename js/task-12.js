// МОДУЛЬ 8 ДРУГЕ ЗАНЯТТЯ
// ДЕСТРУКТУРИЗАЦІЯ об'єкта
// const city = "Kyiv";
// const user = {
//   username: "Alise",
//   age: 25,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   city: "lviv",
// };

// const { username, age } = user;
// Для деструктуризації ми створюємо змінну {} ставемо літерал об'єкта і в середину передаємо ключі в яких
// зберігаються значення  { username, age } після дорівнює назва об'єкта user який ми хочемо деструктуризувати
// const { username, age, city } = user;
// city якщо ми додаємо ключ якого не має в нашому об'єкті ми отримаємо undefidet і для цьго щоб
// запобігти такій поведінці ми в будь яку властивість city яку ми деструктуруємо ми
// можемо присвоїти значення за замовчуванням
// const { username, age, city = "Dnipro" } = user;
// Тепер під час виклику так як ключа city в нашому об'єкті не має то відобразиться значення яке
// ми йому присвоїли "Dnipro"
// Якщо в об'єкті є така властивість із іншим значенням то буде відображатися те що в об'єкті
// тоді "Dnipro" не відобразиться під час виклику. Це в нас як резервний варіант "Dnipro"
// const { username, age, city: userCity = "Dnipro" } = user;
// cyty: userCity - за рахунок присвоєння нового значення наші змінні city
// не будуть конфліктувати в коді і під час виклику
//  userCity = "Dnipro" тут ми також можемо присвоїти значення "Dnipro" на випадок якщо city в нашому
// об'єкті може не бути
// console.log(city);
// Тепер коли ми викликаємо city ми отримаємо "Kyiv"
// console.log(userCity);
// Тепер коли ми викликаємо userCity ми отримаємо  "lviv"
// console.log(age);

// Коли ми хочемо отримати всі об'єкти разом

// const { username, ...obj } = user;
//  username - ми з ньго будемо бачити з верху його властивості а, все що йде після нього
//  ...obj - за рахунок такого запису збереться в залишковий об'єкт
// З нашого  об'єкта user деструктуризувалася наша властивість username а всі інші властивості у форматі
// ключ.значення які є в нашому об'єкті user згрупувалися в об'єкт
// ...obj наш Рест Оператор три крапки перед obj групує залишкові властивості в новий об'єкт
// ...obj - потрібно завжди додавати в кінець всього переліку тому що в іншому місці працювати не буде
// console.log(obj);

// Це приклад Глибокої Деструктуризації тому що в об'єкт user вкладено об'єкт  skills
// const user = {
//   username: "Alise",
//   age: 25,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
// };
// Виконання Глибокої Деструктуризації
// const {
//   skills: { html, css, js },
// } = user;
// Ми деструктуризуємо наш об'єкт  skills: { html, css, js } ставимо після нього дві крапки фігурні дужки
// та деструктуризуємо його ще раз вписуємо в дужки його значення { html, css, js }
// console.log(css);
// Під час виклику css ми у консолі будемо отримувати значення true яке має css і так по всіх властивостях

// const user = {
//   username: "Kate",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
// };

// Без деструктуризації
// function getInfo(obj) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html -  ${obj.skills.html} ,
//     css -  ${obj.skills.css} and js - ${obj.skills.js} `
//   );
// }

// getInfo(user);

// З деструктуризацією передається як параметр під час створення функції

// function getInfo({ username, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${username}, I know html -  ${html} , css -  ${css} and js - ${js} `
//   );
// }

// getInfo(user);

// ДИСТРУКТУРИЗАЦІЯ В ЦИКЛІ

// const users = [{ name: "Kate" }, { name: "Alise" }, { name: "Petya" }];

// Без деструктуризації

// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

// З деструктуризацією
// Створюємо пустий масив куди буде зберігатися результат
// const names = [];
// Через цикл for перебираємо наш масив users
// for (const { name } of users) {
// За допомогою методу .push додаємо наші імена name
//   names.push(name);
// }

// console.log(names);

// ДЕСТРУКТУРИЗАЦІЯ В МЕТОДІ MAP
// const users = [{ name: "Kate" }, { name: "Alise" }, { name: "Petya" }];
// const names = users.map(({ name }) => name);
// console.log(names);
// (obj) - коли ми хочемо деструктуризувати наш об'єкт круглі дужки ми залишаємо
// {name}) => name - в середині круглих дужок ставимо літерал об'єкт  {name} і в середину
// передаємо властивість яка нам потрібна name і після фунції повертаємо її => name

// Задача
// Нам потрібно отримати username,  name,  surname
// const user = {
//   id: 1,
//   username: "harry_porter",
//   profile: {
//     name: "Harry",
//     surname: "Porter",
//     age: 25,
//   },
// };
// Для цього ми
// В фігурних дужках пишемо username потім звертаємось до об'єкта profile в якому є name, surname
// const {
//   username,
//   profile: { name, surname },
// } = user;

// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача:${surname}`);
// console.log(`Ім'я користувача (за нікнеймом):${username}`);

