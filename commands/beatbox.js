'use strict';

module.exports = function beatbox(controller) {
  controller.hears('beatbox', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Boots and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Boots.');
  });
}
