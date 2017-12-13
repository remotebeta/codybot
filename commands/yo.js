'use strict';

module.exports = function yo(controller) {
  controller.hears('yo', ['direct_mention'], function(bot, message) {
    console.log(message);
    console.log(controller);
    bot.reply(message, 'Yo!');
  });
}
