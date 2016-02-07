'use strict';

module.exports = telegraph;

function telegraph (slack, args, message) {
  var userID = args.shift();
  var msg = args.join(' ');


  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Sending a DM to: ' + userID);

  var channel2 = slack.getChannelGroupOrDMByID(userID);
  channel.send('You recieved a message.');
}
