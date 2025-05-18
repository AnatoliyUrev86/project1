// МОДУЛЬ 8 ЗАНЯТТЯ 1
// Тут ми звертаємось до наших трьох id "#parent #child #inner-child
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");
// Тут до наших трьох id parent child innerChild
// Ми підключаємо слухач подій метод addEventListener в круглі дужки передаємо
// Подію "click" і як другий аргумент назви функцій які це будуть виконувати
// onParentClick onChildClick onInnerChildClick
parent.addEventListener("click", onParentClick);
child.addEventListener("click", onChildClick);
innerChild.addEventListener("click", onInnerChildClick);
// Тут ми до нашого слухача подій другим аргументом підключили ще одну функцію clickEl
innerChild.addEventListener("click", clickEl);

function clickEl() {
    console.log("clickEl");
}


function onParentClick(event) {
  // У консолі при виклику ми будемо отримувати рядки із назвою функцій "onParentClick"
  //   Оскільки це у нас колбек фунції то вони приймають в себе об'єкт подій - event
  console.log("onParentClick target", event.target);
  console.log("onParentClick currentTarget", event.currentTarget);
}
function onChildClick(event) {
  // У консолі при виклику ми будемо отримувати рядки із назвою функцій "onChildClick"
  //   Оскільки це у нас колбек фунції то вони приймають в себе об'єкт подій - event
  console.log("onChildClick target", event.target);
  console.log("onChildClick currentTarget", event.currentTarget);
  // З цьго ми робимо висновок що із target - ми будемо отримувати посилання на  елемент на якому відбулася подія
  // В currentTarget - ми отримаємо посилання на елемент на якому висить слухач нашої події addEventListener
  // Якщо ми закоментуємо два слухачі подій а залишимо тільки один
  // наприклад parent.addEventListener("click", onParentClick) то при
  // натисканні на innerChild - слухач події якої закоментований на сторінці ми
  // отрмаємо посилання на нього і також отримаємо
  // посилання на слухач подій який ми залишили parent.addEventListener("click", onParentClick)
  // а два інших закоментували
}
function onInnerChildClick(event) {
    event.stopImmendiatePropagation();
  // У консолі при виклику ми будемо отримувати рядки із назвою функцій "onInnerChildClick"
  //   Оскільки це у нас колбек фунції то вони приймають в себе об'єкт подій - event
  // Якщо ми у фунції пропишемо stopImmendiatePropagation то функція clickEl яка підключена
  // як другий аргумент до слухача подій innerChild.addEventListener("click", clickEl)
  // при кліку на innerChild працювати не буде 
 
    event.stopPropagatoin();
  //  event.stopPropagatoin() - це забороняє вспливанню інших подій крім цієї в якій ми прописали
  // Тобто ящо на інших не прописати event.stopPropagatoin() в них все беде вспливати як раніше
  console.log("onInnerChildClick target", event.target);
  console.log("onInnerChildClick currentTarget", event.currentTarget);
}
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
