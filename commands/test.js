'use strict';

module.exports = function test(controller) {
  controller.hears('test', ['direct_mention'], function(bot, message) {
    bot.reply(message, '<@codydaig> Testing!');
  });
}
