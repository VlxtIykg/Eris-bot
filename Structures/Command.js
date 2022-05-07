export class Command {
    constructor(client, options) {
        this.client = client
        this.name = options.name
        this.args = options.args || false
        this.description = options.description || 'N/A'
        this.aliases = options.aliases || 'N/A'
        this.enabled = options.enabled || true
    }
}