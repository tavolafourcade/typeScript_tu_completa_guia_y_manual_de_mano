(() => {
  // void significa vacío
  function callBatman() {

  }

  function callSuperman(): void {

  }
  const a = callBatman() // a tiene el valor de void
  console.log(a)
  // Al no tener return devuelve undefined
})()