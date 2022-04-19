const MissionCommander = require('./App/missionCommander')

const carlo = new MissionCommander("Carlo")
const Fernanda = new MissionCommander("Fernanda")
const Rodrigo = new MissionCommander("Rodrigo")

console.log(`Hola soy ${carlo.name}, y soy tu MC`);
console.log(`Hola soy ${Fernanda.name}, y soy tu MC`);
console.log(`Hola soy ${Rodrigo.name}, y soy tu MC`);
