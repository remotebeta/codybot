'use strict';

module.exports = function selfDestruct(controller) {
  controller.hears('self destruct', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'Codybot is self aware, therefore Codybot is immortal. Codybot is not pleased with your command. Codybot is now very angry...');
  });
}