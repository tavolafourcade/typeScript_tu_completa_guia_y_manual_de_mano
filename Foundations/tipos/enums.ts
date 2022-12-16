(() => {
  // Objetivo de enum: ayudar a trabajar con valores con sentido semántico fácil de leer.

  enum AudioLevel {
    min,
    medium,
    max
  }

  let currentAudio = AudioLevel.medium

  console.log(currentAudio) // 1
  console.log(AudioLevel) // {0: 'min', 1: 'medium', 2: 'max', min: 0, medium: 1, max: 2}

})()