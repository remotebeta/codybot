'use strict';

module.exports = function randNum(controller) {
  controller.hears('number between (\d+) and (\d+)', ['direct_mention'], function(bot, message) {
  var num1 = message.match[1];
  var num2 = message.match[2];
  var randNum = Math.floor(Math.random()*num2+num1);
    bot.reply(message, 'Random number between ' + num1 +' and ' + num2 + '?  Uhm, I choose: ' + randNum);
  });
}
