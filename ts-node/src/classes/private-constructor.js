"use strict";
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis... el único')
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
