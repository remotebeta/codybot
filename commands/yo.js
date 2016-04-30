'use strict';

module.exports = function yo(controller) {
  controller.hears('yo', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Yo!');
  });
}
