'use strict';

module.exports = test;

function test(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByName('therealcodybot');
  channel.send('Testing!');
}
