if (document.documentElement.clientWidth < 1199) {
  AOS.init({
    duration: 2000,
    offset: 0
  })
} else {
  AOS.init({
    duration: 2000,
    offset: 100
  })
}
