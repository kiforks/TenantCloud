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
          let itemHasToggle = item.classList;

          itemHasToggle.contains(itemActiveClass) ? itemHasToggle.remove(itemActiveClass) : itemHasToggle.add(itemActiveClass);
        })
      }
    })
  }

  const createTarget = (target, defaultValue = '') => {
    return new Proxy(target, {
      get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
  }

  const example = createTarget(
    {
      toggleItem: 'item',
      toggleButton: 'button',
      modifierItem: '--id',
      modifierButton: '--id'
    }
  )

  const toggleObjects = [
    example
  ];

  const toggleClassInit = () => toggleObjects.forEach(object => toggleClass(object));

  return toggleClassInit();
})();
