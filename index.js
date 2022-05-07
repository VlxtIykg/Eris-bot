import { bot } from './onStart/startUp.js';
import { botprefix } from './onStart/ready.js';
//console.log(bot);
import { Events } from './Handler/Events.js'; Events(bot); import { preSetData } from './Handler/Commands.js'; preSetData(bot)
console.log('Do something');
//['Commands', 'Events'].forEach(handler => import (`./Handlers/${handler}`)(bot))
//let handler = new Ready()
//console.log(handler);