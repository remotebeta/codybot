'use strict';

module.exports = function yo(controller) {
  controller.hears('flip a coin', ['direct_mention'], function(bot, message) {
    var num = Math.floor(Math.random()*2+1);
    num === 1 ? bot.reply(message, 'Coin flip result: Heads!') : bot.reply(message, 'Coin flip result: Tails!');
  });
}