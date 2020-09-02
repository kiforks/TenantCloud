window.onload = function () {
  Preloader();
};

function Preloader() {
  const preload = document.querySelector('.preloader');
  const site = document.querySelector('.site-wrapper');

  setTimeout(() => {
    preload.style.display = 'none';
    site.style.opacity = '1';
    preload.style.opacity = '0';
  }, 700);
}
