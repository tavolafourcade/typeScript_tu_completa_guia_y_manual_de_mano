// import { Hero as SuperHero, Hero2 } from './classes/Hero'; // Le damos el alias SuperHero a Hero
// import * as HeroClasses from './classes/Hero' // Alias completo a todo lo que exporta el módulo
// import powers, {Power} from './data/powers';
import { Hero } from './classes/Hero'
// const Hero = 123

// const ironman = new SuperHero('Ironman', 1, 55)

// const ironman = new HeroClasses.Hero('Ironman', 1, 55)
const ironman = new Hero('Ironman', 1, 55)

console.log(ironman);
console.log(ironman.power);





