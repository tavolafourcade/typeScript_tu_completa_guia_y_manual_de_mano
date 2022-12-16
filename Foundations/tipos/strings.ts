(() => {
   // 3 formas de declarar strings
   const batman: string = 'Batman'
   const linternaVerde = 'Linterna Verde'
   const volcanNegro = `Héroe: Volcan Negro` 

   console.log(batman.toUpperCase())
   console.log(`I'm ${batman}`)
   console.log(batman[10]?.toUpperCase() || 'No está batman')
})()