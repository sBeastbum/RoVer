const Command = require('../Command')
const DiscordServer = require('../../DiscordServer')

module.exports =
class AnnounceChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'announcechannel',
            aliases: ['roverannouncechannel'],
            description: "`<Discord Channel>` Set a channel that the bot will post a message to every time someone verifies. Default none.",
            
            args: [
                {
                    key: 'channel',
                    label: 'channel',
                    prompt: "What channel should verified members be announced to?",
                    type: 'channel',
                    default: false,
                }
            ]
        });
    }

    async fn(msg, args, pattern) {
        let channel = args.channel;

        if (channel) {
            this.server.setSetting('announceChannel', channel.id);
            msg.reply(`Set verify announcement channel to ${channel}`);
        } else {
            this.server.setSetting('announceChannel', null);
            msg.reply("Verified users will no longer be announced.");
        }
    }
}