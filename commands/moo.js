'use strict';

var slackApi = require('../lib/slackApi');

var mooTracker = {};

module.exports = function moo(controller) {
  controller.hears('moo', ['direct_mention'], function(bot, message) {

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

    slackApi.getChannelName(message.channel, controller)
      .then(function (name) {
        if(name === 'codybot_test') {
          bot.api.reactions.add({
              timestamp: message.ts,
              channel: message.channel,
              name: 'polarbear',
          }, function(err, res) {
              if (err) {
                  bot.botkit.log('Failed to add emoji reaction :(', err);
              }
          });

          if (okayToSend) {
            mooTracker[message.channel] = new Date();
            for (var i = 0; i < 5; i++) {
              setTimeout(function () {
                bot.reply(message, {
                  text: '<!channel> Rawrrr!!!!!!'
                  // icon_emoji: ':cow:'
                });
              }, i * 2000);
            }
          }
        } else {
          bot.api.reactions.add({
              timestamp: message.ts,
              channel: message.channel,
              name: 'cow2',
          }, function(err, res) {
              if (err) {
                  bot.botkit.log('Failed to add emoji reaction :(', err);
              }
          });

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
        }
      })
      .catch(function (err) {
        console.error(err);
      });
    
  });
}
