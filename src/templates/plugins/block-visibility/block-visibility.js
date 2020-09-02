let resizeTimeout;

// Запускаем функцию при прокрутке страницы. ВАЖНО! Используем padding вместо margin для секций
if(window.screen.width > 1200) {
  window.addEventListener('scroll', function() {
    windowSectionActive('main__item', 'anchors__link');
  });
}

function windowSectionActive(target, link) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      visibleSection(target, link);

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

function visibleSection(target, link) {
  // Получаем нужный элементы
  let sections = document.querySelectorAll(`.${target}`);
  let links = document.querySelectorAll(`.${link}`);

  sections.forEach((section, index) => {
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + section.getBoundingClientRect().top - 400,
        bottom: window.pageYOffset + section.getBoundingClientRect().bottom - 400
      },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.top < windowPosition.top &&
      targetPosition.bottom > windowPosition.top) {
      links[index].classList.add(`${link}--active`)
    } else {
      links[index].classList.remove(`${link}--active`)
    }
  })
};

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
visibleSection('main__item', 'anchors__link');

