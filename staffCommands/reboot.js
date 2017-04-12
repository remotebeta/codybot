'use strict';

var exec = require('child_process').exec;

module.exports = function reboot(controller) {
  controller.hears('reboot', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'codybot is going down and hopefully coming back up.');

    exec('pm2 restart all', function (err, stdout, stderr) {
      console.err(err);
      console.error(stderr);
      console.log(stdout);
    });
    
    // console.log('Rebooting');
    // exec('ssh codybot@scheduler.codybot.com "pm2 restart scheduler"', function (err, stdout, stderr) {
    //   console.error(err);
    //   console.error(stderr);
    //   console.log(stdout);

    //   // exec('pm2 restart codybotv2', function (err, stdout, stderr) {
    //   //   console.error(err);
    //   //   console.error(stderr);
    //   //   console.log(stdout);
        
    //   //   exec('pm2 restart codybot', function (err, stdout, stderr) {
    //   //     console.error(err);
    //   //     console.error(stderr);
    //   //     console.log(stdout);
    //   //   });
    //   // });

    // });

    // console.log(message._client.channels.C0LFUN4F2.name);
  })
}
