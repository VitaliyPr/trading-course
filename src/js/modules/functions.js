// Перевірка підтримки webp, додавання класа webp чи no-webp для HTML
export function isWebp() {
  // Перевірка підтримки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Додавання класу _webp чи _no-webp для HTML
  testWebP(function (support) {
    let className = support === true? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}


export function pageWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}