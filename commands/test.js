'use strict';

module.exports = test;

function test(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('All systems normal.');
  console.log(message);
}
