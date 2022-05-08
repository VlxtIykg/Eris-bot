import * as fs from 'fs';
const categories = fs.readdirSync('./preSetCommands/');

export function preSetData(client) {
    try {
        categories.forEach(async (category) => {
            fs.readdir(`./preSetCommands/${category}/`, async (err) => {
                if(err) return console.error(`${err}`)
                const commands = fs.readdirSync(`./preSetCommands/${category}`).filter(p => p.endsWith('.js'));
                for(const file of commands) {
                    const f = await import(`../preSetCommands/${category}/${file}`)
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
        })
    } catch (error) {
        console.error(error)
    }
}