// МОДУЛЬ 11 ПЕРШЕ ЗАНЯТТЯ
// Для того щоб зробити запит на сервер використовуємо метод fetch()
fetch("http://jsonplaceholder.typicode.com/todos")
  // В цей метод як аргумент передається URL "http://jsonplaceholder.typicode.com/todos" за яким ми хочемо зробити запит
  // Метод fetch - це асинхронна оперрація тому що ми не знаємо за який час сервер виконає наш запит
  // Метод fetch повертає нам у консолі Проміс то нам потрібно його обробити за допомогою методів
  // .then - коли проміс успішно завершився та методу .catch - коли проміс завершився помилкою
  .then((res) => {
    console.log("then", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("catch", error);
  });

// res.json() - це для того щоб розпарсити наші не зрозумілі дані які ми отримали з сервера цей метод
// повертає проміс
// Тепер нам потрібно обробити наш Проміс щоб отримати готовий результат за допомогою методу then
// І тепер ми отримаємо ланцюжки промісів  return res.json();
// Тепер ми ще раз обробляємо наш проміс за допомогою методу .then і викликаємо console.log(data)
// Під час обробки  .then((data) цей метод - і вже тут бачимо наш готовий результат
// Пояснення
// Отже в першому then((res) ми отримуємо дані які fetch  дочекався
// із сервера ("http://jsonplaceholder.typicode.com/todos") але ці данні потрібно розпарсити тому що вони не готові
//  return res.json() - за допомогою респонс джейсон ми розпарсили наші дані та отримали ще один проміс
// Потім цей проміс потрібно обробити його ще раз .then((data) і отримати готовий результат


