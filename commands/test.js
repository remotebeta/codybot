'use strict';

module.exports = test;

function test(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('All systems normal.');
  // console.log(message._client.channels.C0LFUN4F2.name);
}
