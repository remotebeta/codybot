'use strict';

var slack = require('../lib/slack.js');

module.exports = morning;

function morning(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Goooooooooood Morning!!!!!!!!!!');
}
