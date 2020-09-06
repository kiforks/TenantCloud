'use strict';

(function () {
  function toggleClass(object) {
    let itemClass = `${object.toggleItem}`;
    let buttonClass = `${object.toggleButton}`;
    let activeClass = '--active';
    let itemActiveClass = `${itemClass + activeClass}`;
    let toggleItem = document.querySelectorAll(`.${itemClass + object.modifierItem}`);
    let toggleButton = document.querySelectorAll(`.${buttonClass + object.modifierButton}`);

    toggleButton.forEach((button) => {
      button.onclick = event => {
        event.preventDefault();

        toggleItem.forEach(item => {
          item.classList.toggle(itemActiveClass)
        })
      }
    })
  }

  const createTarget = (target, defaultValue = '') => {
    return new Proxy(target, {
      get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
  };

  const header = createTarget(
    {
      toggleItem: 'header',
      toggleButton: 'header__button'
    }
  );

  const toggleObjects = [
    header
  ];

  const toggleClassInit = () => toggleObjects.forEach(object => toggleClass(object));

  return toggleClassInit();
})();
