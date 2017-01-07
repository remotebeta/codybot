'use strict';

module.exports = function help(controller) {
  controller.hears('help', ['direct_mention'], function(bot, message) {
    bot.reply(message,
`I'm codybot!
Usage: \`@codybot: <command>\`
Commands:
moo - Moo the current channel 5 times. Limit one use per channel per 30 min.
buzz - Buzz the current channel 5 times. Limit one use per chanel per 30 min.
morning - Say good morning!
compose - Print out a poem
beatbox - Make Codybot drop a sick beat
flip a coin - responds Heads or Tails
number between [some number] and [some number]
magic8ball - Classic Magic 8 Ball
help - Print this prompt`
    );
  });
}
