'use strict';

module.exports = function paper(controller) {
  controller.hears('paper', ['direct_mention'], function(bot, message) {
    var logic = require('../lib/rpsls-logic');
    var botChoice = logic.botChoice('paper');
    var botReply = 'CodyBot anticipated your choice of \'paper\' and countered with ' + botChoice + '!\nYou lose! Try again?';

    if (logic.judgeWinner('paper', botChoice)) {
      botReply = 'CodyBot has developed a fault! He tried to counter your \'paper\' with ' + botChoice +
                 '!\nYou have defeated CodyBot and reign victorious!'
    }
    bot.reply(message, botReply);
  });
}
