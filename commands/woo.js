'use strict';

var mooTracker = {};

module.exports = function woo(controller) {
  controller.hears('woo-channel', ['direct_mention'], function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'woo',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });

    var okayToSend = true;
    var lastVisit = mooTracker[message.channel];
    if (lastVisit) {
      var thirtyMinutes = 30 * 60000; // 60000 being the number of milliseconds in a minute
      var now = new Date();
      var thirtyMinutesAgo = new Date(now - thirtyMinutes);
      if (lastVisit > thirtyMinutesAgo) {
        okayToSend = false;
      }
    }

    if(okayToSend) {
      mooTracker[message.channel] = new Date();
      for(var i=0; i < 5; i++) {
        setTimeout(function () {
          bot.reply(message, '<!channel>:woo: woo!!!!!');
        }, i * 2000);
      }
    }
  });

  controller.hears('woo', ['direct_mention'], function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'woo',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
    bot.reply(message, 'WOOOOOOOO!!!!!!!!!! :woo:');
  });
}
