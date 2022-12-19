"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const error2 = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error2('Bye');
})();
//# sourceMappingURL=never.js.map