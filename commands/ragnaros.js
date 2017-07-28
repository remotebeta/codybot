'use strict';

module.exports = function ragnaros(controller) {
  controller.hears('ragnaros', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Die insect!!!');
  });
}
