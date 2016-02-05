'use strict';

module.exports = yo;

function yp(slack, args, message) {
  // var channel = slack.getChannelGroupOrDMByID(message.channel);
  message.channel.send('Yo!');
}
