import { bot } from '../onStart/startUp.js'
import { Event } from '../Structures/Event.js'
import { prefix } from '../data/parser.js';
//console.log(Event);

export class Message extends Event {
    constructor(...args) {
        super(...args)
        //console.log(...args);
    }

    async run(message) {
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        if(message.channel.type === 'text') {
			if (!message.guild.members.cache.get(this.client.user.id)) await message.guild.members.fetch(this.client.user.id)
			if (!message.channel.permissionsFor(message.guild.me).missing('SEND_MESSAGES')) return
        }
        
        let args = message.content.slice(prefix.length).split(/ + /g);
        let command = args.shift().toLowerCase();

        let cmd;
        if(this.client.commands.has(command)) cmd = this.client.get(command);
        else if (this.client.aliases.has(command)) cmd = this.client.aliases.get(command);
        else return

        if(!args[0] && cmd.args === true) return this.client.responses('noArguments', message)

        try {
            cmd.run(this.client, message, args)
        } catch (error) {
            console.error(`${error}`)
        }
    }
}