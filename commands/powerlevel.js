'use strict';

module.exports = function powerLevel(controller) {
  controller.hears('powerlevel', ['direct_mention'], function(bot, message) {
    bot.reply(message, "It's over 90000!!!!!!!!!!");
  });
}
