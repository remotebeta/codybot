'use strict';

module.exports = help;

function help(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('I\'m codybot! \n\n\
    Usage: `@codybot: <command>`\n\n\
    Commands: \n\
    moo - Moos the current channel 5 times. Limit one use per channel per 30 min. \n\
    reject <comanyName> - Records that you were rejected from that company. \n\
    help - Prints this prompt \
    ');
}
