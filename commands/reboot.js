'use strict';

var exec = require('child_process').exec;

module.exports = function() {};

// function reboot(slack, args, message) {
//   var channel = slack.getChannelGroupOrDMByID(message.channel);
//   channel.send('codybot is going down and hopefully coming back up.');
//   exec('pm2 restart codybot', function (err, stdout, stderr) {
//     console.error(err);
//     console.error(stderr);
//     console.log(stdout);
//   });
//   // console.log(message._client.channels.C0LFUN4F2.name);
// }
