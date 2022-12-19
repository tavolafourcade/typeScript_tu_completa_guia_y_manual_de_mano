"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('John');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map