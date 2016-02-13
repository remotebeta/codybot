module.exports = function caps() {};
// 'use strict';

// var mongoose = require('mongoose');

// var Message = mongoose.model('Message');

// module.exports = caps;

// function caps(slack, args, message) {
//   var channel = slack.getChannelGroupOrDMByID(message.channel);
//   var back2 = false;
//   var userID;

//   // if no one's username was passed in,
//   // then codybot should use this user's last-but-one message
//   // (because their most recent message was '@codybot caps')
//   if (args.length) {
//     userID = args.shift();
//   } else {
//     userID = message.user;
//     back2 = true;
//   }

//   var userName = userID.slice(2, userID.length-1);

//   var mutateMessage = function(message) {
//     var toCaps = message.toUpperCase();
//     // strip the punctuation
//     var toLol = toCaps.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
//     // make sure there aren't multiple spaces in a row
//     var tidy = toLol.replace(/\s{2,}/g, ' ');
//     var excited = tidy + '!!1!';
//     return excited;
//   };

//   Message.find({ user: userName })
//     .where('channel').equals(message.channel)
//     .sort({'ts' : -1})
//     .limit(2)
//     .select('text')
//     .exec(function(err, message) {
//       if (err) {
//         return console.error(err);
//       }
//       if (back2) {
//         channel.send(mutateMessage(message[1].text));
//       }
//       else {
//         channel.send(mutateMessage(message[0].text));
//       }
//     });

// }
