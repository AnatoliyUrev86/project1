// const friends = ["Rachel", "Monica", "Phoebe", "joey"];
// const arr = [];
// for(let i = 0; i<friends.length; i++) {
//     // console.log(friends[i]);
//     // friends[i] = `${friends[i]}!!!`
//     arr.push(`${friends[i]} - ${i}`)
// }
// console.log(arr);


// for(const name of friends) {
//     console.log(name);
// }

// console.log(friends.includes("joey"));

// Перевірити чи справді є масив

// console.log(Array.isArray(friends)); якщо масив знайшов - true якшо не знайшов - false

// Задача
// Напиши скрипт із обчислення площі прямокутника із сторонами які зберігаються у змінній
// values у вигляді рядка.
// Значення гарантовано розділене пробілом
// "5 10" - це будуть сторони нашого прямокутника наприклад

// const values = "5 10";
// const arr = values.split(" "); 
// - щоб перетворити наш рядок на масив

// const result = arr[0]*arr[1]; - це буде розрахунок площі

// const result = (Number (arr[0])+Number(arr[1]))*2;
// Ми за допомогою Number перетворюємо рядок на число і рахуємо периметр прямокутника
// console.log(result); 

// Задача від ментора на самостійне опрацювання

// Функція повинна робити лише те, що очевидно мається на увазі її назвою. І це має бути однією дією. Якщо коротко і зрозуміло: Одна функція -- одна дія.
// Якщо функція має повернути бульове значення, не обов’язково повертати з функції true чи false. Скоріш за все ви можете повернути з функції безпосередньо саму умову з if. Наприклад, замість:
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// краще написати:
// function isAdult(age) {
//   return age >= 18;
// }
// Шпаргалка з оголошення функцій у JS:
// Функціональний вираз (function expression)
// const greet = function (name) {
//  return `Hello, ${name}`;
// };
// Оголошення функції (function declaration)
// function greet(name) {
//  return `Hello, ${name}!`;
// }

// Для того, щоб щось повернути з функції/методу або умови, можна використовувати оператор return. Також з функції можна повертати відразу будь-який тип даних, наприклад return 'hello' // (повернемо рядок) чи return true // (повернемо буль) чи return [1, 2] // (повернемо масив)
// Паттерн раннє повернення, говорить про те, що якщо умова всередині нашего if повертає true, то нам одразу же треба щось повернути із тіла цієї умови, з допомогою return.
// Не забувайте, що оператор = це оператор присвоєння, а не порівняння.
// Декілька лайфхаків при роботі з масивами.
// Як швидко очистити масив
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []
// Як об'єднати більше двох масивів
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// Як отримати рандомне значення масиву
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву


// const friends = ["Rachel", "Monica", "Phoebe", "joey"];
// for(let i = 0; i < friends.length; i++){
// friends[i] = friends[i] + `-${i}`  
// }
// console.log(friends);
// Данний спосіб звертається до всіх елементів масиву friends
// Таким чином ми звертаємось до нашого масиву friends та його елементів [i]
// Та присвоюємо йому через через `-${i}` - шаблонні рядки додаємо {i}

// friends[0] = "Alise";  
// Тут ми звертаємось до масива friends його індекса [0] і кажемо присвой йому 
// нове значення "Alise"


// friends[0] = "Alise " + friends[0];  
// Тут ми додаємо нове значення до вже існуючого 
// Данний спосіб звертається до конкретного елементу масиву friends за його індексом [0]

// for of - Використовується якщо на потрібно перебрати масив весь масив без конкретних його елементів
// for(const friend of friends){
//     console.log(friends);
// }

// console.log(friends.includes("joey"));
// includes - Цей метод шукає в нашому масиві friends рядок "joey" якщо знаходить повертає нам true якщо ні  false

// Задача

// Напиши скрипт для перебору масиву fruits
// Для кожного елементу масиву виведи в консоль  рядок 
// у форматі номер елемнта значення елемента
// Нумерація елементів повинна починатися з 1

// const fruits =["apple", "pear", "grapes", "banana", "orange"];
// for(let i = 0; i<fruits.length; i++){
// console.log(`${i + 1}: ${fruits[i]}`);
// }
// ${i}- В такому випадку у консолі нумерація буде починатися з нуля 
// А нам по умові треба щоб з одиниці тому додаємо наступне ${i + 1}

// Задача 

// Напиши скрипт який підраховує суму всіх парних чисел у масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// const total = 0;

// for(const num of numbers){
//     if(num % 2 === 0){
//         total = total + num;
//     }
    
// }
// console.log(total);


 










