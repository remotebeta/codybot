'use strict';

module.exports = telegraph;

function telegraph (slack, args, message) {
  var userID = args.shift();
  var msg = args.join(' ');
  console.log(userID);
  userID = userID.slice(2, userID.length-1);
  console.log(userID);

  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Sending a DM to: ' + userID);

  console.log('dmChannel');
  slack.openDM(userID, function (openDmData) {
    if(openDmData.ok) {
      var dmChannel = slack.getChannelGroupOrDMByID(openDmData.channel.id);
      dmChannel.send('You recieved a telegraph from <@' + message.user  + '>: ' + msg);
    }
  });
}
