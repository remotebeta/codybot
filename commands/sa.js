'use strict';

var exec = require('child_process').exec;

module.exports = function reboot(controller) {
  controller.hears('technical assessment', ['direct_message','mention','direct_mention', 'message_received'], function(bot, message) {
    bot.reply(message, 'May god have mercy on your souls...');
    // console.log(message._client.channels.C0LFUN4F2.name);
  });
}
