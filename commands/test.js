'use strict';

module.exports = test;

function test(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByName('codydaig');
  channel.send('<@codydaig> Testing!');
}
