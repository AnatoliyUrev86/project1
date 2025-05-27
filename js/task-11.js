// МОДУЛЬ 8 ЗАНЯТТЯ 1
// Тут ми звертаємось до наших трьох id "#parent #child #inner-child
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");
// Тут до наших трьох id parent child innerChild
// Ми підключаємо слухач подій метод addEventListener в круглі дужки передаємо
// Подію "click" і як другий аргумент назви функцій які це будуть виконувати
// onParentClick onChildClick onInnerChildClick
// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);
// Тут ми до нашого слухача подій другим аргументом підключили ще одну функцію clickEl
// innerChild.addEventListener("click", clickEl);

// function clickEl() {
//   console.log("clickEl");
// }

// function onParentClick(event) {
// У консолі при виклику ми будемо отримувати рядки із назвою функцій "onParentClick"
//   Оскільки це у нас колбек фунції то вони приймають в себе об'єкт подій - event
//   console.log("onParentClick target", event.target);
//   console.log("onParentClick currentTarget", event.currentTarget);
// }
// function onChildClick(event) {
// У консолі при виклику ми будемо отримувати рядки із назвою функцій "onChildClick"
//   Оскільки це у нас колбек фунції то вони приймають в себе об'єкт подій - event
//   console.log("onChildClick target", event.target);
//   console.log("onChildClick currentTarget", event.currentTarget);
// З цьго ми робимо висновок що із target - ми будемо отримувати посилання на  елемент на якому відбулася подія
// В currentTarget - ми отримаємо посилання на елемент на якому висить слухач нашої події addEventListener
// Якщо ми закоментуємо два слухачі подій а залишимо тільки один
// наприклад parent.addEventListener("click", onParentClick) то при
// натисканні на innerChild - слухач події якої закоментований на сторінці ми
// отрмаємо посилання на нього і також отримаємо
// посилання на слухач подій який ми залишили parent.addEventListener("click", onParentClick)
// а два інших закоментували
// }
// function onInnerChildClick(event) {
//   event.stopImmendiatePropagation();
// У консолі при виклику ми будемо отримувати рядки із назвою функцій "onInnerChildClick"
//   Оскільки це у нас колбек фунції то вони приймають в себе об'єкт подій - event
// Якщо ми у фунції пропишемо stopImmendiatePropagation то функція clickEl яка підключена
// як другий аргумент до слухача подій innerChild.addEventListener("click", clickEl)
// при кліку на innerChild працювати не буде

//   event.stopPropagatoin();
//  event.stopPropagatoin() - це забороняє вспливанню інших подій крім цієї в якій ми прописали
// Тобто ящо на інших не прописати event.stopPropagatoin() в них все беде вспливати як раніше
//   console.log("onInnerChildClick target", event.target);
//   console.log("onInnerChildClick currentTarget", event.currentTarget);
// }
// Події вспливають по рівню вкладеності від дітей до батьків  якщо на них вчіх висить
// слухач подій addEventListener і в круглих дужках прописана одна і та сама подія "click"
//Тобто вспливання буде по рівню вкладеності з початку дитина потім батько вище в якого вона вкладена Приклад
// parent (3)
// child (2)
// innerChild (1)

// ЯКЩО ВИНИКАЄ НЕОБХІДНІСТЬ ПРИПИНИТИ СПЛИВАННЯ НАШИХ ПОДІЙ ТО
// Це буде означати наступне якщо ми клікаємо на наш дочірній елемент innerChild то подія
// відбувається тільки на ньому а на батьківському parent нічого не відбудеться
// Для цьго в нашого event - об'єкта подій є властивість stopPropagatoin()

// Задача
// Де потрібно дістати кольори із трьох квадратів
// const container = document.querySelector(".container");
// box.addEventListener("click", handleClick);
// function handleClick(event) {
// Щоб дістати data-color="red" - дата атрибут в яких зберігається колір потрібно
//   const color = event.currentTarget.dataset.color;
// event - об'єкт події
// currentTarget -  ми отримаємо посилання на елемент на якому висить слухач нашої події addEventListener
// dataset - данна властивість використовується щоб дістати значення кольору із data-color="red"
// color - буде отримувати зазначений колір
//   console.log(color);
// }
// Тепер при натисканні на квадрати будуть відображатися кольори які в них є

// ПРИ ДЕЛЕГУВАННІ ПОДІЙ МИ МОЖЕМО НАВІШУВАТИ ЛИШЕ ОДИН ОБРОБНИК ПОДІЙ НА БАТЬКІВСИЙ ЕЛЕМЕНЬ "container"

const container = document.querySelector(".container");
container.addEventListener("click", handleClickbtn);
// Тут ми відразу на наш батьківський елемент container навішуємо наш слухач подій addEventListener

function handleClickbtn(event) {
  if (!event.target.classList.contains("box")) {
    // contains("box") - контейс перевіряє чи є у елемента клас в даному випадку клас "box"
    // contains - цей метод повертає true або false
    return;
  }
  const color = event.target.dataset.color;
  // Це ми пишемо для того щоб при кліку на наш елемент відображався його колір
  console.log(color);
}

const products = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/459014029/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-audi-a6-%D1%87%D0%B0%D1%80%D0%BB%D1%8C%D1%81%D1%82%D0%BE%D0%BD-%D1%81%D1%88%D0%B0.jpg?s=612x612&w=0&k=20&c=3pyF2PeTFIEBSbKjgQk66rEmDWytbH2rshBwBBFtK9Q=",
    price: 3000,
    name: "bicycle",
    descriptoin: "23-inch monitor",
  },
  {
    id: 2,
    img: "https://baza-gai.com.ua/catalog-images/bmw/x5/model.jpg",
    price: 5000,
    name: "phone",
    descriptoin: "23-inch monitor full HD",
  },
];

const productscontainer = document.querySelector(".products");
productscontainer.insertAdjacentHTML("beforeend", createMarkup(products));
productscontainer.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      (product) => `
        <li class="item product-item" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name} width="300">
        <h2 ${product.name}></h2>
        <p>Ціна: ${product.price} грн</p>
        </li> `
    )
    .join("");
}

function handleClick(event) {
  // Тут ми порівнюємо елемент на який ми клікаємо  event.target та елемент на якому весить
  // слухач події container тобто event.currentTarget це те саме тоді бери і припиняй виконання функції return;
  if (event.target === event.currentTarget) {
    // event.target - елемент на який ми клікаємо
    // event.currentTarget - елемент на якому весить слухач події container
    return;
  }
  // Для того щоб прибрати натискання користувача які він може зробити
  // на картинці на заголовку або ще десь пишемо нижче
  const currentProduct = event.target.closest(".product-item");
  // Створюємо змінну куди ми будемо зберігати наш результат
  // event.target - елемент на який може клікнути користувач
  // closest()- цей метод приймає селектор найближчого батьківського елемента product-item який ми хочемо знайти
  // він знайде батьківський елемент product-item до event.target
  // І поверне його у змінну currentProduct
  // Для того щоб витягнути значення id - щоб розуміти на який саме товар натиснув користувач
  const id = currentProduct.dataset.id;
  // Ми створюємо змінну id і присвоюємо значення нашої змінної currentProduct і
  // dataset - дає нам значення в данному випадку id
  console.log(id);
  console.log(currentProduct);
  // Тепер нам потрібно знайти той самий елемент по id якого клікнув користувач для цього використаємо метод
  const product = products.find((item) => item.id === +id);
  // (item) - відповідає за елементи нашого масиву
  // Ми з елемента масиву хщчемо взяти його айді  item.id та порівняти із тим id - який ми
  //  витягнути із dataset.id
  // item.id === +id;
  // +id - ставимо плюс перед айді щоб перетворити наш рядок на чило тому що якщо цьго не зробити
  // буде при натисканні undefined
  console.log(products);
  // ДАЛІ ПОТРІБНО СТВОРИТИ МОДАЛЬНЕ ВІКНО ЩОБ ВОНО ВСПЛИВАЛО
  // Через  CDN переходимо за посиланням https://cdnjs.com/libraries/basicLightbox/5.0.0 копіюємо
  // два посилання і підключаємо
  // https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.css підключається вище боді
  // в тег <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.css">
  // https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.css
  // піключається вище файлу js до якого ми будемо застосовувати
  //  <script src="https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.js"></script>

  const instance = basicLightbox.create(`
        <div class="modal">
        <img src="${product.img}"alt="${product.name}">
         <h2 ${product.name}></h2>
         <h3>${product.price} грн</h3>
         <p>${product.descriptoin}</p>
        </div>`);
  instance.show();
  //   instance.show() - тут ми звертаємось до нашого модального вікна і додаємо метод .show()
  //   яке при натисканні на наш товар буде вспливати вікно із цією позицією а остальні буде перекривати
  //   тому що це модальне вікно
}

// import { fooEl, value } from "./task-14";
// console.log("fooEl", fooEl);
// console.log("value", value);
