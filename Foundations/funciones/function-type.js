"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    //* Podemos darle un tipado a myFunction
    let myFunction;
    // let myFunction: (x: number, y: number) => number
    // let myFunction: (x: string) => string
    // let myFunction: () => string
    //* Si no va a regresar nada o undefined podemos ponerle void
    // myFunction = 10
    // console.log(myFunction)
    myFunction = addNumbers;
    console.log(myFunction(1, 2)); // Al asignar por referencia se infiere el tipado original.
    myFunction = greet;
    console.log(myFunction('Laura'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    //* TypeScript infiere los tipos después de una asignación.
})();
