'use strict';

var powerLevelTracker = {};

module.exports = function powerLevel:(controller) {
  controller.hears('powerlevel', ['direct_mention'], function(bot, message) {
    var okayToSend = true;
    var lastVisit = powerLevelTracker[message.channel];
    if (lastVisit) {
      var thirtyMinutes = 30 * 60000; // 60000 being the number of milliseconds in a minute
      var now = new Date();
      var thirtyMinutesAgo = new Date(now - thirtyMinutes);
      if (lastVisit > thirtyMinutesAgo) {
        okayToSend = false;
      }
    }

    if(okayToSend) {
      powerLevelTracker[message.channel] = new Date();
      for(var i=0; i < 5; i++) {
        setTimeout(function () {
          bot.reply(message, '<!channel> Over 9000!!!!!');
        }, i * 2000);
      }
    }
  });
}