'use strict';

module.exports = function meow(controller) {
  controller.hears('meow', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Meow!');
  });
}
