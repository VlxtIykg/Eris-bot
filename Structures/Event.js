class Event{
    constructor(client, file, options = {}) {
        this.client = client
        this.name = options.name || file.name
        this.file = file
    }
    async _run(...args) {
        try {
            await this.run(...args)
        } catch (error) {
            console.error(error)
        }
    }
}

export { Event }