"use strict";
(() => {
    var _a;
    // 3 formas de declarar strings
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está batman');
})();
