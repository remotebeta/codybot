'use strict';

module.exports = function spock(controller) {
  controller.hears('spock', ['direct_mention'], function(bot, message) {
    var logic = require('../lib/rpsls-logic');
    var botChoice = logic.botChoice('spock');
    var botReply = 'CodyBot anticipated your choice of \'spock\' and countered with ' + botChoice + '!\nYou lose! Try again?';

    if (logic.judgeWinner('spock', botChoice)) {
      botReply = 'CodyBot has developed a fault! He tried to counter your \'spock\' with ' + botChoice +
                 '!\nYou have defeated CodyBot and reign victorious!'
    }
    bot.reply(message, botReply);
  });
}
