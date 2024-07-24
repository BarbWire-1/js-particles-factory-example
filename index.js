
import {ParticlesFactory} from 'js-particles-factory'

const myParticles = new ParticlesFactory({ particle: { randomFill: false } });


// test method
myParticles.setFillMode("random")

//see properties and methods
console.log(myParticles);
