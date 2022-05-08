import { Command } from '../../Structures/Command.js'
import { bot } from '../../onStart/startUp.js'
import * as fs from 'fs'
import { ClassicEmbed } from '../../Other_Dependencies/embed.js'
const categories = fs.readdirSync('./commands/')
import { prefix } from '../../data/parser.js'
let botPrefix = prefix('../data')

export class Help extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			aliases: ['commands', 'cmds', 'h'],
		})
	}
	async run(client, message, args) {
        const embed = new ClassicEmbed('778323', 'Help', `botPrefix: **${botPrefix}`, ["KamiBot", "https://i.imgur.com/fVxJR2t.jpg"])

        categories.forEach(async (category) => {
			const helpCommands = []
			let categoryCommands = ''
			const commandsFile = fs.readdirSync(`./preSetCommands/${category}`).filter(file => file.endsWith('.js'))
			console.log(commandsFile);
			for (let i = 0; i < commandsFile.length; i++) {
				const commandName = commandsFile[i].split('.')[0]
				const actualCommandName = commandName.charAt(0).toUpperCase() + commandName.slice(1)
				helpCommands.push(`\`${actualCommandName}\`  `)
			}

			for (let i = 0; i < helpCommands.length; i++) categoryCommands += helpCommands[i]
			const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
			embed.addField(`${categoryName} (${commandsFile.length} commands)`, `${categoryCommands}`)
		})
		await bot.createMessage(message.channel.id, {embeds: [embed]})
	}
}

