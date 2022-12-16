(() => {
  // Tipado: const numbers: (string | number)[]
  const numbers = [1,2,3,4,5,'6',7,8,9,10]

  numbers.push(11)
  // numbers.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'

  const numbers2: number[] = [1,2,3,4,5,'6',7,8,9,10] //Type 'string' is not assignable to type 'number'

})()