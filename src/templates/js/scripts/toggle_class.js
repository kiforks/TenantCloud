'use strict';

(function () {
  function toggleClass(object) {
    let itemModifier = `${object.modifierItem}`;
    let buttonModifier = `${object.modifierButton}`;
    let itemClass = `${object.toggleItem}`;
    let buttonClass = `${object.toggleButton}`;
    let activeClass = '--active';
    let itemActiveClass = `${itemClass + activeClass}`;
    let toggleItem = document.querySelectorAll(`.${itemClass + itemModifier}`);
    let toggleButton = document.querySelectorAll(`.${buttonClass + buttonModifier}`);

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
      toggleButton: 'button'
    }
  )

  const toggleObjects = [example];

  return (function toggleClassInit() {
    return toggleObjects.forEach(object => toggleClass(object));
  })();
})();
