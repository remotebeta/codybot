'use strict';

module.exports = test;

function test(controller) {
  controller.hears('test', ['direct_mention'], function(bot, message) {
    bot.reply(message, '<@codydaig> Testing!');
  });
}
