'use strict';

module.exports = function telegraph(controller) {
  controller.hears('telegraph', ['direct_mention'], function(bot, message) {
    // var args = message.text.split(' ').slice(1);
    // var recipient = args.shift();
    // var msg = args.join(' ');

    // var channel = slack.getChannelGroupOrDMByID(message.channel);
    // channel.send('Sending a DM to: <@' + userID + '>');

    // slack.openDM(userID, function (openDmData) {
    //   if(openDmData.ok) {
    //     var dmChannel = slack.getChannelGroupOrDMByID(openDmData.channel.id);
    //     dmChannel.send('You received a telegraph from <@' + message.user  + '>: ' + msg);
    //   }
    // });
  })
}

// module.exports = function telegraph(slack, args, message) {
//   var userID = args.shift();
//   var msg = args.join(' ');
//   userID = userID.slice(2, userID.length-1);

//   var channel = slack.getChannelGroupOrDMByID(message.channel);
//   channel.send('Sending a DM to: <@' + userID + '>');

//   slack.openDM(userID, function (openDmData) {
//     if(openDmData.ok) {
//       var dmChannel = slack.getChannelGroupOrDMByID(openDmData.channel.id);
//       dmChannel.send('You received a telegraph from <@' + message.user  + '>: ' + msg);
//     }
//   });
// }
