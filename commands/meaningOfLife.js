'use strict';

module.exports = function meaningOfLife(controller) {
  controller.hears('meaning of life', ['direct_mention'], function(bot, message) {
    bot.reply(message, '42');
  });
}
