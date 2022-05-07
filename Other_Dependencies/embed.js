import {overview} from './databaseQuery.js';
import { config } from '../data/parser.js';
let allTables = config('../data/config.json');
import { block } from '../Events/ready.js'

export function ClassicEmbed(color, title, description, footer) {
    this.color = color;
    this.title = title;
    this.author = {name: 'Kami\'s bot', icon_url: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org'};
    this.description = description || 'Some description here';
    this.thumbnail = {url: 'https://i.imgur.com/AfFp7pu.png'};
    this.fields = [];
    this.timestamp = new Date();
    this.footer = footer || {text: 'Kot!', icon_url: 'https://i.imgur.com/gecf9hP.jpg'}
}

export const overviewTable = () => {
    const database = new ClassicEmbed("000000", "Overview for db")
    function addFields() {
        for(const x of overview) {
            let currentDay = Object.values(x)[0]
            let currentDayProfit = Object.values(x)[1]
            let template = {
                name: `Day: ${currentDay}`,
                value: `Profits: ${currentDayProfit}`,
                inline: true
            }
            database.fields.push(template)
        }
    }
    addFields()
    return database;
}
export const args = () => {
    const missingArgs = new ClassicEmbed("000000", "Overview for db")
    function addFields() {
        let template = {
            name: `You are missing arguments, you have to choose which table you would like to drop!`,
            value: `This is an irreversible action and all the data will be lost.`,
            inline: false
        }
        database.fields.push(template)
        let i = 0;
        do {

            database.fields.push(template[i]);
            i++;
        } while (i <= allTables.length);
        database.fields.push(template)
    }
    addFields()
    return missingArgs;
}


