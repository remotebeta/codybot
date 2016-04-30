'use strict';

module.exports = function help(controller) {
  controller.hears('help', ['direct_mention'], function(bot, message) {
    bot.reply(message,
`I'm codybot!
Usage: \`@codybot: <command>\`
Commands:
moo - Moos the current channel 5 times. Limit one use per channel per 30 min.
reject <companyName> - Records that you were rejected from that company.
caps <@user> - Repeats that user's last message in this channel, in ALL CAPS
help - Prints this prompt`
    );
  });
}
