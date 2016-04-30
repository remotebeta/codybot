'use strict';

var exec = require('child_process').exec;

module.exports = function reboot(controller) {
  controller.hears('reboot', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'codybot is going down and hopefully coming back up.');
    exec('pm2 restart codybot', function (err, stdout, stderr) {
      console.error(err);
      console.error(stderr);
      console.log(stdout);
    });
    // console.log(message._client.channels.C0LFUN4F2.name);
  })
}
