'use strict';

var mooTracker = {};

module.exports = function moo(controller) {
  controller.hears('moo', ['direct_mention'], function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'cow2',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });

    var okayToSend = true;
    var thirtyMinutes = 30 * 60000; // 60000 being the number of milliseconds in a minute
    var now = new Date();
    var thirtyMinutesAgo = new Date(now - thirtyMinutes);
    var lastVisit = mooTracker[message.channel];

    if (lastVisit) {
      if (lastVisit > thirtyMinutesAgo) {
        okayToSend = false;
      }
    }

    if (okayToSend) {
      mooTracker[message.channel] = new Date();
      for (var i = 0; i < 5; i++) {
        setTimeout(function () {
          bot.reply(message, {
            text: '<!channel> Mooooo!!!!!!'
            // icon_emoji: ':cow:'
          });
        }, i * 2000);
      }
    }
  });
}
