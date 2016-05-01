'use strict';

module.exports = function rock(controller) {
  controller.hears('rock', ['direct_mention'], function(bot, message) {
    var logic = require('../lib/rpsls-logic');
    var botChoice = logic.botChoice('rock');
    var botReply = 'CodyBot anticipated your choice of \'rock\' and countered with ' + botChoice + '!\nYou lose! Try again?';

    if (logic.judgeWinner('rock', botChoice)) {
      botReply = 'CodyBot has developed a fault! He tried to counter your \'rock\' with ' + botChoice +
                 '!\nYou have defeated CodyBot and reign victorious!'
    }
    bot.reply(message, botReply);
  });
}
