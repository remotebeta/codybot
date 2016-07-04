'use strict';

var exec = require('child_process').exec;

module.exports = function standupremind(controller) {
  controller.hears('standupremind', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Sending out reminders, stand-bye for confirmation..........');
    exec('node /home/codydaig/app.codybot-scheduler/standups.js', function (err, stdout, stderr) {
      if(err) {
        bot.reply(message, 'An error occured, please let cody know and send him this:');
        bot.reply(message, err);
      }
      if(stderr) {
        bot.reply(message, 'An error occured, please let cody know and send him this:');
        bot.reply(message, stderr);
      }
      if(stdout) {
        bot.reply(message, 'I think it was successful, here\'s who recieved a reminder');
        bot.reply(message, stdout);
      }
    });
  });
}
