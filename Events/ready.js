export const block = "block";
import { bot } from "../onStart/startUp.js";
import { readdirSync } from "fs";
import { Event } from '../Structures/Event.js'

export class Ready extends Event {
    constructor(...args) {
        super(...args)
        console.log(...args);
        console.log("hi");
    }
    async run() {
        console.log('> Adding items');
        try {
        let commands = readdirSync("./commands").filter((file => file.endsWith(".js")))
        console.log(commands);
        for (const file of commands) {
            const pull = import(`./commands/${file}`);
            const command = new pull(this.client)
            this.client.items.set(command.name.toLowerCase(), command)
            console.log(`Added ` + command.name.toLowerCase());
            if (command.aliases && Array.isArray(command.aliases))
                for (let i=0; i < command.aliases.length; i++) {
                    this.client.item_aliases.set(command.aliases[i], command)
                    console.log('Added aliases ' + command.aliases[i].toLowerCase());
                }
        }
        } catch (error) {
            console.error(`${error}`)
        }
        console.log(' > Done');
    }
}
console.log('Does this even work? Console log where?');