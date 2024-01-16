export function Tabs() {
  if (document.querySelector(".tabs")) {
    // получаем массив всех вкладок
    const tabs = document.querySelectorAll(".tabs-nav__tab");
    // получаем массив всех блоков с содержимым вкладок
    const contents = document.querySelectorAll(".tabs-content");
  
    // запускаем цикл для каждой вкладки и добавляем на неё событие
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", (event) => {
        // сначала нам нужно удалить активный класс именно с вкладок
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
          tabsChildren[t].classList.remove("tabs-nav__tab--active");
        }
        // добавляем активный класс
        tabs[i].classList.add("tabs-nav__tab--active");
        // теперь нужно удалить активный класс с блоков содержимого вкладок
        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
  
        for (let c = 0; c < tabContentChildren.length; c++) {
          tabContentChildren[c].classList.remove("tabs-content--active");
        }
        // добавляем активный класс
        contents[i].classList.add("tabs-content--active");
      });
    }
  }
}