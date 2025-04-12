console.log(typeof Number("5"))
console.log(Number(false))

// Не явне перетворення
console.log("10" - 2)
console.log("4" == 4)

// Метод роботи parseInt- він приводить рядок до числа 
// а літери його не цікавлять в консолі отримуємо 50
let width = "50px";
width = Number.parseInt(width);
console.log(width);


// Метод роботи parseFloat- він приводить рядок до числа і 
// повертає цілу і дробову частину
// а літери його не цікавлять в консолі отримуємо 100.54
let heigth = "100.54px";
heigth = Number.parseFloat(heigth);
console.log(heigth);

// Задача
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз 
// значення змінної value. Math.floor() Math.ceil() Math.round()
// Перевір у консолі при значеннях 27.3 та 27.9

// Math.floor - ей метод округлює число до
// нижньої цілої частини тобто до 27 

// якщо змінити value на 27.3  на 27.9 
// в консолі ми отримаємо 27 - цей метод округлює число до
// нижньої цілої частини тобто до 27
// const value = 27.5;
// console.log(Math.floor(value));


// Math.ceil - ей метод округлює число до
// верхньої цілої частини тобто до 28
// console.log(Math.ceil(value));

// Math.round - ей метод округлює число до
// найближчої цілої частини тобто якщо value = 27.3 то 27
// якщо value = 27.5 то 28
// console.log(Math.round(value));

// Фунції
// Фунції/ім'я фунції
// під час створення в (параметри фунції - х,у)             
function add(x,y){
    console.log("hello world")  
    const total = x+y
    console.log(total)
    return total;
    // return - припиняє дію нашої фунції і поветає 
    // її значення total тобто 2+5=7 в цьму випадку
    // тіло фунції
}
// під час виклику фунції в (аргументи фунції - 2,5)
add(2,5) 
// add за ім'ям фунції звертаємось ставимо круглі дужки 
// і викликаємо нащу фунцію
// У консолі відпрацюється код який знаходиться в 
// тілі фунції: hello world

// Задача 1. Замовлення дроїдів

// Станція з продажу ремонтних дроїдів готова до запуску, 
// залишилося написати програмне забезпечення для відділу продажів. 
// Оголоси 
// функцію makeTransaction(quantity, pricePerDroid, customerCredits), 
// яка складає та повертає повідомлення про купівлю ремонтних дроїдів.


// Вона оголошує три параметри, значення яких будуть задаватися під 
// час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення 
// (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку 
// цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
//  функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати 
// рядок "You ordered <quantity> droids worth <totalPrice> credits!", 
// де <quantity> це кількість замовлених дроїдів, а <totalPrice> це 
// їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits){
//     let totalPrice;
//     totalPrice = quantity*pricePerDroid;
//     console.log(totalPrice)
// if(totalPrice>customerCredits){
// return "Insufficient funds!"
// } else{
//     return "You ordered <quantity> droids worth <totalPrice> credits!"
// }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength){
//     console.log(maxLength);
//     if(maxLength<=message)
//         return "message"
//     else if(maxLength>message){
//         return "..."
//     }
// }

// // Задача 2

// // Оголоси функцію formatMessage(message, maxLength), яка приймає рядок 
// // (параметр message) та перевіряє його довжину відповідно до заданої 
// // максимальної довжини (параметр maxLength).
// // Доповни код функції таким чином, що:
// // Якщо довжина рядка дорівнює або менша за maxLength, то функція 
// // повертає початковий рядок без змін.
// // Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength 
// // символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//     if(message.length<=maxLength) {
// return message;
//     } else  {
//         return message.slice(0,maxLength)+"...";
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// // Задача 3

// // Функція checkForSpam(message) приймає рядок (параметр message), 
// // перевіряє 
// // його на вміст заборонених слів spam і sale, і повертає результат 
// // перевірки. Слова в рядку параметра message можуть бути в довільному 
// // регістрі, наприклад SPAM або sAlE.
// // Доповни код функції таким чином, що:
// // Якщо знайдено заборонене слово (spam або sale), то функція повертає 
// // буль true
// // Якщо в рядку відсутні заборонені слова, функція повертає буль false
// // Візьми код нижче і встав після оголошення своєї функції для перевірки 
// // коректності її роботи. У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//     const lowerCaseMessage=message.toLowerCase();
//     return lowerCaseMessage.includes("spam")||lowerCaseMessage.includes("sale")
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// const user = "Alise Franko";
// // console.log(user.slice(0,7));
// // slice(0,7) - в цьму методі ми звертаємось до нашого рядка 
// // і в круглих дужках вказуємо індекси елементів які ми хочемо
// // побачити в консолі

// console.log(user.toLowerCase())
// // toLowerCase- данний метод перетворює рядок всі літери до нижньго
// // регістру тобто "alise franko"

// console.log(user.toUpperCase())
// // toLowerCase- данний метод перетворює рядок всі літери до верхньго
// // регістру тобто "ALISE FRANKO"

// console.log(user.includes("li"))
// // includes("li") - цей метод перевіряє наш рядок чи є у ньому
// // літери "li" а в слові Alise - вони є він повертає true 
// // ту частину на яку ми перевіряємо наш рядок ми пишемо в 
// // круглих дужках в середині лапок він чутливий до регістру
// // false - якщо ввести літери яких не має він поверне хибне
// // булеве значення

// console.log(user.startsWith("A"))
// // startsWith - перевіряє з якого символу починається наш рядок
// // потрібно вводити першу літеру рядка в данному випадку "A"
// // якщо знаходить повертає нам true, якщо не знаходить false він 
// // чутливий до регістра

// console.log(user.endsWith("ko"))
// // endsWith - - перевіряє з якого символу закінчується наш рядок
// // потрібно вводити останні літери рядка в данному випадку "ko"
// // якщо знаходить повертає нам true, якщо не знаходить false він 
// // чутливий до регістра

// console.log(user.indexOf("s"))
// // indexOf - наприклад в круглих дужках пишемо літеру "s" то данний
// // метод повертає нам в консоль індес за яким данна літера 
// // знаходиться у нашому рядку в данному випадку - 3 якщо літера 
// // якщо відсутня в рядку він повертає нам -1
// // якщо вводити дві або більше літер він поверне той індес який
// // першим знайде у рядку

// console.log(user.trim())
// trim - "                  Alise Franko                   "; якщо 
// стається така ситуція що користувач може поставити багато пробілів
// данний метод їх приберає і в консолі наш рядок залишиться 
// таким як був без пробілів

// Задача

// Напиши скрипт який перевіряє чи закінчується значення змінної link
// символом / . Якщо ні додай то  кінця значення link цей символ
// Використовуй if...else

// let link = "https://my-site.com/about";
// if(!link.endsWith("/")){
// link = link + "/"
// }
// console.log(link);
// Пояснення
// endsWith - цим методом ми перевіряємо наше посилання чи закінчується 
// воно на "/" так як його там не має ми отримаємо false. 
// Ми не потрапипо в тіло нашого циклу if тому ми пред !link ставимо
// знак заперечення  ! і отримуємо true.
// Тепер ми  потрапимо в тіло нашого циклу if.

// Та сама задача але при використанні оператора і та тернарного
// оператора
 
// Напиши скрипт який перевіряє чи закінчується значення змінної link
// символом / . Якщо ні додай то  кінця значення link цей символ,
// але тільки в тому випадку коли link має підрядок my-site
// Використовуй if...else 
// && - оператор і або тернарний оператор
// && - оператор і приклад
// let link = "https://my-site.com/about";
// if(!link.endsWith("/") && link.includes("my-site")){
// link = link + "/"
// }

// Тернарний оператор ?

// let link ="https://my-site.com/about";
// if(!link.endsWith("/") && link.includes("my-site")){
// link =+ "/"
// }
// console.log(link)




