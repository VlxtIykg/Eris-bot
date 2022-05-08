import { Command } from '../../Structures/Command.js'

export class Help extends Command {
	constructor(client) {
		super(client, {
			name: 'info',
			aliases: ['check', 'about'],
			args: true
		})
	}
	async run(client, message, args) {
        let command = args.shift().toLowerCase()

		let cmd;
		if (this.client.items.has(command)) cmd = this.client.items.get(command)
		else if (this.client.item_aliases.has(command)) cmd = this.client.item_aliases.get(command)
        else return message.channel.send('Seems like that item doesn\'t exist or we didn\'t add it in.')

		try {
            cmd.run(client, message, args)
        }
        catch (e) {
            console.error(e)
            message.reply('There was an error trying to execute that command!')
        }
	}
}

