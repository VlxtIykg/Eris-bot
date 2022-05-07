import { ClassicEmbed } from "../Other_Dependencies/embed.js"
export const errors = async (type, message, args) => {
    const embed = new ClassicEmbed('RANDOM');
	switch (type) {
		case 'reloadError': {
			message.channel.send(embed.setDescription(`An error occured while reloading \`${args}\`.`));
			break;
		}
		case 'noItem': {
			message.channel.send(embed.setDescription('Please provide a valid item name.'));
			break;
		}
		case 'noArguments': {
			message.channel.send(embed.setDescription('You didn\'t provide any arguments.'));
			break;
		}
		default: {
			message.channel.send(this.client.error());
		}
	}
}