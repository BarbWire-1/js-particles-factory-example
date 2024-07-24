// index.js
//import { ParticlesFactory } from './node_modules/js-particles-factory/dist/particles-factory.js';
import {ParticlesFactory} from 'js-particles-factory'

const myParticles = new ParticlesFactory({ particle: { randomFill: true } });

myParticles.particles.noFill = false;
// Test setting properties
myParticles.setFillMode("random")

// Additional testing code
console.log(myParticles);
