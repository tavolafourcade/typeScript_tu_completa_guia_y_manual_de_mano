
// Función anónima autoinvocada para crear varios archivos en el proyecto que no caigan en el scope global.
(() => {
  const msg = 'Hello World'

  const hero = {
    name: 'Ironman',
    age: 45
  }
  
  console.log(hero)
  
  // const a:number = 45
  // let b: number
  
  // function sayHello(msg: string) {
  //   console.log(msg)
  // }
  
})()