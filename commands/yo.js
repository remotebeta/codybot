'use strict';

module.exports = yo;

function yo(controller) {
  controller.hears('yo', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Yo!');
  });
}
