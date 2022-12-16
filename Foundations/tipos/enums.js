"use strict";
(() => {
    // Objetivo de enum: ayudar a trabajar con valores con sentido semántico fácil de leer.
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio); // 1
    console.log(AudioLevel); // {0: 'min', 1: 'medium', 2: 'max', min: 0, medium: 1, max: 2}
})();
