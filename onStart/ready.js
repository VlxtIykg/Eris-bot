import { bot } from './startUp.js';
import { prefix } from '../data/parser.js';
export const botprefix = prefix('../data');

bot.on("ready", () => {
    readyMsg()
});

bot.on("error", (err) => {
    console.error(err)
});


export const readyMsg = () => {
    return console.log('Eris bot is ready');
}