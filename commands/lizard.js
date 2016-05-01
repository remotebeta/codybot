'use strict';

module.exports = function lizard(controller) {
  controller.hears('lizard', ['direct_mention'], function(bot, message) {
    var logic = require('../lib/rpsls-logic');
    var botChoice = logic.botChoice('lizard');
    var botReply = 'CodyBot anticipated your choice of \'lizard\' and countered with ' + botChoice + '!\nYou lose! Try again?';

    if (logic.judgeWinner('lizard', botChoice)) {
      botReply = 'CodyBot has developed a fault! He tried to counter your \'lizard\' with ' + botChoice +
                 '!\nYou have defeated CodyBot and reign victorious!'
    }
    bot.reply(message, botReply);
  });
}
