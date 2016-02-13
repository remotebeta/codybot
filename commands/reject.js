module.exports = function caps() {};
// 'use strict';

// var mongoose = require('mongoose');

// var Rejection = mongoose.model('Rejection');

// module.exports = reject;

// function reject(slack, args, message) {
//   var channel = slack.getChannelGroupOrDMByID(message.channel);

//   var companyName = args[0];
//   var rejection = new Rejection({
//     companyName: companyName,
//     user: message.user,
//     timestamp: { type: Date, default: Date.now }
//   });

//   Rejection.find({
//     companyName: companyName,
//     user: message.user
//   }).exec(function (err, rejections) {
//     if(rejections.length > 0) {
//       channel.send('This information is already in my database. Thanks for reminding me though.');
//     } else {
//       rejection.save(function (err, rejection) {
//         if (err) {
//           return console.error(err);
//         }

//         channel.send('Sounds like you\'re too awesome for ' + rejection.companyName + ' anyways!');
//       });
//     }
//   });
// }
