'use strict';

module.exports = function help(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('I\'m codybot! \n\n\
    Usage: `@codybot: <command>`\n\n\
    Commands: \n\
    moo - Moos the current channel 5 times. Limit one use per channel per 30 min. \n\
    reject <companyName> - Records that you were rejected from that company. \n\
    caps <@user> - Repeats that user\'s last message in this channel, in ALL CAPS \n\
    help - Prints this prompt \
  ');
}
