"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No lastname'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No lastname'}`;
        }
    };
    const name = fullName('John', 'Doe', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map