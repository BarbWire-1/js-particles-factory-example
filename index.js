
import {ParticlesFactory} from 'js-particles-factory'

const myParticles = new ParticlesFactory({ particle: { randomFill: false } });


// Test setting properties
myParticles.setFillMode("random")

//set proerties and methods
console.log(myParticles);
