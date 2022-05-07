import { Command } from "../Structures/Command.js"
import { ClassicEmbed } from "../Other_Dependencies/embed.js"
import { bot } from "../onStart/startUp.js"

export class Help extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
            aliases: 'test2',
            description: 'Just a test command'
        })
    }
    async runCommand(client, message, args) {
        const embed = new ClassicEmbed('000000', "Just a test");
        await bot.createMessage(message.channel.id, {embeds: [embed]})
    }
}