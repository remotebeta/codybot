'use strict';

module.exports = function scissors(controller) {
  controller.hears('scissors', ['direct_mention'], function(bot, message) {
    var logic = require('../lib/rpsls-logic');
    var botChoice = logic.botChoice('scissors');
    var botReply = 'CodyBot anticipated your choice of \'scissors\' and countered with ' + botChoice + '!\nYou lose! Try again?';

    if (logic.judgeWinner('scissors', botChoice)) {
      botReply = 'CodyBot has developed a fault! He tried to counter your \'scissors\' with ' + botChoice +
                 '!\nYou have defeated CodyBot and reign victorious!'
    }
    bot.reply(message, botReply);
  });
}
