import * as fs from 'fs';
const categories = fs.readdirSync('./commands/');

export function preSetData(client) {
    try {
        //categories.forEach(async (category) => {
            fs.readdir(`./commands/`, async (err) => {
                if(err) return console.error(`${err}`)
                const commands = fs.readdirSync(`./commands/`).filter(p => p.endsWith('.js'));
                for(const file of commands) {
                    const f = await import(`../commands/${file}`)
                    const wantedClass = f.Help
                    //console.log(wantedClass);
                    const command = new wantedClass(client)
                    client.commands.set(command.name.toLowerCase(), command)
                    if(command.aliases && Array.isArray(command.aliases)) {
                        for (let i = 0; i < command.aliases.length; i++) {
                            client.aliases.set(command.aliases[i], command)
                        }
                    }
                }
            })
        //})
    } catch (error) {
        console.error(error)
    }
}