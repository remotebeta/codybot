'use strict';

module.exports = function randNum(controller) {
  controller.hears('number between (\\d+) and (\\d+)', ['direct_mention'], function(bot, message) {
  var num1 = message.match[1];
  var num2 = message.match[2];
  // swaps values if num1 is larger than num2
  if(num1 > num2) num2 = [num1, num1 = num2][0];
  // whole number between num1 and num2 inclusively
  var randNum = Math.floor((Math.random()*(num2-num1+1)))+num1;
  bot.reply(message, 'Random number between ' + num1 +' and ' + num2 + '?  Uhm, I choose: ' + randNum);
  });
}
