'use strict';

module.exports = morning;

function morning(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Goooooooooood Morning!!!!!!!!!!');
}
