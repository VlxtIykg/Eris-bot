import { bot } from './onStart/startUp.js';
import { botprefix } from './onStart/ready.js';
//console.log(bot);
import { Events } from './Handler/Events.js';  import { commands } from './Handler/Commands.js'; import { preSetData } from './Handler/preSetCmds.js';
Events(bot).then(commands(bot)).then(preSetData(bot)).catch("Failed to execute preSetData")
//console.log('Do something');
//['Commands', 'Events'].forEach(handler => import (`./Handlers/${handler}`)(bot))
//let handler = new Ready()