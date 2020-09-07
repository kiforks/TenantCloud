if (document.documentElement.clientWidth < 1199) {
  AOS.init({
    duration: 1500,
    offset: 0
  })
} else {
  AOS.init({
    duration: 1500,
    offset: 100
  })
}
