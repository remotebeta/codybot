'use strict';

module.exports = function morning(controller) {
  controller.hears('morning', ['direct_mention'], function(bot, message) {
    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'sun_with_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
    bot.reply(message, 'Goooooooooood Morning!!!!!!!!!!');
  });
}
