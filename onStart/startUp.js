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

        this.commands = new Collection();
        console.log();
        this.aliases = new Collection();

        this.items = new Collection();
        this.item_aliases = new Collection();

        this.responses = import('../Structures/Responses.js');
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