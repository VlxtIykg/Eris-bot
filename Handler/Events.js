import * as fs from 'fs'
//const fs = require('fs')
const events = fs.readdirSync(`./Events/`)

export const Events = async (client) => {
	const jsevents = events.filter(c => c.split('.').pop() === 'js')
    for (let i = 0; i < jsevents.length; i++) {
		if (!events.length) throw Error('No event files found!')
	    if (!jsevents.length) throw Error('No javascript event files found!')
	    const file = await import(`../Events/${jsevents[i]}`)
		 console.log(await import(`../Events/${jsevents[i]}`));
	    const event = file(client, file)
	    if (typeof event.run !== 'function') throw Error(`No run function found in ${jsevents[i]}`)
	    const name = jsevents[i].split('.')[0]
		//console.log(client.on(name, (...args) => {event.run(...args); console.log(...args);}));
	    client.on(name, (...args) => {event.run(...args); console.log(...args);})
    }
}
