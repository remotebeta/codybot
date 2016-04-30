'use strict';

module.exports = function morning(controller) {
  controller.hears('morning', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Goooooooooood Morning!!!!!!!!!!');
  });
}
