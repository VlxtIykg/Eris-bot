import Eris, { Client } from 'eris'
import { customColl as Collection } from './Collection.js';
import { token } from '../data/parser.js';
import { cp } from 'fs';
let botToken = token('./data')

export class KamisClient extends Client {
	constructor(config = {}, options = {}) {
		if(options.env) {
			if (botToken === undefined || botToken === null) {
				throw new Error('Missing dotenv package or token');
			}
			else {
				return botToken;
			}
		}
        super(typeof config === 'string' ? config: token, options);

		Object.assign(this.options, {
			connectOnDeclare: true
		}, options)

        this.commands = new Collection()
        this.aliases = new Collection()

        this.items = new Collection()
        this.item_aliases = new Collection()

        this.responses = import('../Structures/Responses.js')
		if (this.options.connectOnDeclare) this.connect(); console.log('Connecting.\nConnecting..\nConnecting...');
		if (typeof config !== 'string') this.config = config;
    }
	async run(botToken = this.token) {
		super.login(botToken)
	}

    log(msg) {
        console.log(' > ' + msg)
    }

}
export const bot = new KamisClient(botToken)
//bot.connect()
//console.log(KamisClient);

/* class SomeClient extends Eris.Client {
	console.log(FireworkClient);
	constructor() {
		super({
			disabledMentions: 'everyone',
            partials: [
				'MESSAGE',
                'CHANNEL',
                'REACTION'
            ]
        })
		
        this.commands = new Eris.Collection()
        this.aliases = new Discord.Collection()

        this.items = new Discord.Collection()
        this.item_aliases = new Discord.Collection()

        this.prefix = '-'
        this.embedDurationLength = "30"

        this.responses = require('./Responses.js')
    }

    log(msg) {
        console.log('> ' + msg);
    }
}
export const cm = new Collection(); */
//export default Eris(botToken, {intents: ["allNonPrivileged",]});