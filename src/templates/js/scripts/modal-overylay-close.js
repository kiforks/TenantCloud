function closeModal(selector) {
  const modal = document.querySelectorAll(`.${selector}`);

  modal.forEach(modalWindow => {
    modalWindow.addEventListener('click', event => {
      event.preventDefault();
      let parent = event.target;

      if(parent.classList.contains(selector)) {
        modalWindow.classList.add(`${selector}--closed`);
      }
    })
  })
}

closeModal('modal');
