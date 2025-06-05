// МОДУЛЬ 10 ЗАНЯТТЯ 2
// Як нам самостійно створити Проміс для робоити з Асинхронним кодом
// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve("ok");
//     } else {
//       reject("ops");
//     }
//   }, 2000);
// });
// promise
//   .then((resolve) => {
//     console.log("then", resolve);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   })
//   .finalli(() => {
//     console.log("promise");
//   });

// Щоб створити проміс для роботи з асинхронним кодом створюємо змінну promise ми звертаємось до класу Promise
// І створюємо його екземпляр new Promise як параметри в круглі дужки передаємо стрілочну функцію яка буде
// приймати в себе два методи (resolve, reject)
// random - змінна яка буде генерувати в себе якесь випадкове число
// Щоб написати в середині промісу асинхронний код звертаємось до методу setTimeout
// І в ньму за допомогою циклів if та else будемо перевіряти виконання або не виконання нашого промісу
// Метод resolve - відповідає за виконання нашого промісу і в середину передаємо данні які ми хочемо отримати
// при успішному виконанні нашого промісу "ok"
// Метод reject - відповідає за не виконання нашого промісу і в середину передаємо данні які ми хочемо отримати
// при не виконанні нашого промісу "ops" тобто помилки
// У консолі отримує мо Проміс pending - це означає що він очікує на результат
// Після ще одного оновлення консолі ми отримуємо стан Промісу fulfilled - це успашне виконання промісу тому що
// спрацював метод resolve
// Після ще одного оновлення консолі ми отримуємо "rejected" - для виконання Промісу з помилкою і переведення його
// в стан rejected
// Для того щоб обробляти результат виконання нашого Промісу promise є метод .then() - цей метод буде чекати доки наш
// Проміс завершиться успіхом він буде отримувати результат "ok" і обробляти його він приймає в себе колбек функцію
// Ця функція приймає в себе як параметр успішне виконання нашого промісу resolve
// Тепер викликаємо метод який буде обробляти помилку .catch він приймає в себе колбук функцію а функція буде
// отримувати значення яке буде при помилці нашого промісу "ops"
// .finalli() - даний метод виконується в будь якому випадку не залежно від того як наш проміс виконається
// успішно чи помилкою він так само приймає колбек функцію
// але без параметрів тому що ми не знаємо чим завершиться наш промі успшно чи помилкою
// Також має бути дотримана послідовність скільки б методів не було по кількості
// 1-й має бути  .then 2-й має бути .catch 3-й має бути .finalli

// СТВОРЕННЯ ЛАНЦЮЖКІВ ДЛЯ promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// });
// promise
//   .then((res) => {
//     return res * 2;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//         console.log(err);
//       })

// З методу then завжди буде повертатися promise і загорнуте в нього значення res * 2 для того щоб обробити
// цей результат promise тобто res * 2 ми створюємо ще один метод then де буде оброблятися результат
// Таким чинов вибудовується наш ланцюжок promise

// Promise - це  об'єкт який повертає поточний стан нашого Асинхроного коду він приймає в себе колбек функцію яка
// в свою чергу приймає в себе два параметри resolve - відповідає за умову коли проміс виконується і має стан
// очікування pending потім стан виконання fulfilled
// reject - відповідає за виконання промісу коли помилка і отрмання стану rejected
// .finalli() - подія яка виконується в будь якому випадку не залежить від того чи проміс виконається чи
// буде помилка

// У НАС Є ДВАВИДИ АСИНХРОННОГО КОДУ ЯКИЙ МАЄ МІКРО ТА МАКРО ПРОЦЕСИ
// ДО МІКРО ПРОЦЕСІВ - проміси promise слухач подій addEventListener та Обсервер на який ми будемо дивитися
// ДО МАКРО ПРОЦЕСІВ ВІДНОСЯТЬСЯ -  setTimeout та setInterval
// Під час виконання у нас буде виконуватися Асинхронний код

// console.log("step 1");

// setTimeout(() => {
//   console.log("step 2");
// }, 0);

// new Promise(() => {
//   resolve("step 3");
// }).then((data) => console.log(data));
// setTimeout(() => {
//   console.log("step 3");
// }, 0);

// ПРОМІСИФІКАЦІЯ

// Проблема доступу до результату проміса з колбеком
// Функція яка повертає проміс

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//       return;
//     }
//     onError(`Закінчились продукти`);
//   }, 1000);
// };

// makeOrder(
//   "Пиріжок",
//   (result) => {
//     console.log("success");
//     console.log(result);
//   },
//   (error) => {
//     console.log("error");
//     console.log(error);
//   }
// );

// Створюємо функцію makeOrder яка буде приймати в себе три параметри
// 1-й dish - буде рядок
// 2-й onSuccess - метод функція беде виконуватися якщо Асинхронний код написаний завершиться успіхом
// 3-й onError - метод функція беде виконуватися якщо Асинхронний код написаний завершиться помилкою
// Запускаємо нашу функцію makeOrde і передаємо в неї рядок  "Пиріжок" далі у нас йде функція onSuccess і ми її
// відразу робимо стрілочною вона буде отримувати результат (result) і виводити в консоль два рядочки
// Далі йде функція onError ми її також відразу робимо стрілочною вона приймає в себе  (error) і виводить у
// консоль два рядочки якщо буде помилка

// МЩЖЕМО ЗАПИСАТИ ЗАПИС ВИЩЕ ПО ШНШОМУ

// Замість того щоб викликати одну а потім іншу функцію ми робимо Промисифікацію ми створюємо проміс
// який буде  об'єктом з певним результатом
// const makeOrde = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`);
//       }
//       reject(`Закінчились продукти`);
//     }, 1000);
//   });
// };

// // console.log(makeOrde);
// makeOrde("Пиріжок")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Тепер ми бачемо у консолі що наша функція повертає проміс  return new Promise або який успішно завершиться  resolve
// або який з помилкою  reject тепер результат нашого асинхронного коду ми не обробляємо в середині нашої функції
// ми обробляти його не будемо ми просто повертаємо проміс  return new Promise
// Ми обробляємо його на зовні

// Промисифікація синхронних функцій

// Promise.resolve();
// Promise.reject();

// const stsrtTime = Date.now();

// const res1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const delta = currentTime - stsrtTime;

//       resolve({ title: "first", time: delta });
//     }, 2000);
//   });
// };

// const res2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const delta = currentTime - stsrtTime;

//       resolve({ title: "second", time: delta });
//     }, 1000);
//   });
// };

// const res3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const delta = currentTime - stsrtTime;

//       resolve({ title: "third", time: delta });
//     }, 4000);
//   });
// };

// Promise.all([res1(), res2(), res3()]).then((data) => console.log(data));
// Promise.race([res1(), res2(), res3()])
//   .then((data) => console.log("then", data))
//   .catch((error) => console.log("catch", error));

// Створюємо три зміних які будуть приймати в себе колбек функцію та створюємо новий екземпляр промісу  new Promise
// як параметри передаємо успішне виконання промісу resolve та не успішне виконання промісу з помилкою reject
// Потім запускаємо наш асинхронний код через метод  setTimeout який приймає перший аргумент колбек функцію в якій
// створюємо змінні які приймаєть екземпляр новий нашого промісу  const currentTime = Date.now();
// Та створюємо змінну куди будемо записувати різницю між currentTime - stsrtTime
// У нас є три проміси які виконуються у різний час це як різні три сервери на які ми відправили запити щоб
// отримати данні
// Promise.all([]) - цей метод приймає в себе масив промісів він буде чекати доки виконаються всі проміси
// res1, res2, res3 і лише після цьго поверне їх результат
// Щоб передати наші проміси в масив нашого Promise.all ми повинні їх викликати в квадратних дужках тобто
// передати їх назву і поставити після круглі дужки [res1(), res2(), res3()]
// Promise.race([]) - цей метод також приймає в себе масив промісів який виконається найшвидше

// ЗАДАЧА

const startBtn = document.querySelector(".stsrt-btn");
const result = document.querySelector(".result");
const container = document.querySelector(".container");

startBtn.addEventListener("click", handalClick);
function handalClick() {
  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("won");
      } else {
        reject("lost");
      }
    });
  });
  Promise.allSettled([promises]).then((data) => {
    data.forEach((item, i));
    container.children[i].textContent = "";
    const isWinner = data.every(
      (item) =>
        item.status === "fulfilled" ||
        data.every((item) => item.status === "rejtc")
    );

    setTimeout(() => {
      container.children[i].textContent = item.value || item.reason;
    }, 1000 * (i + 1));
    result.textContent = isWinner ? "Winner" : "Luser";
  });
}
