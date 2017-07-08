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
scat - Bring out Codybot's inner Scatman John
flip a coin - Heads or Tails
number between [some number] and [some number] - Gives whole number between two numbers inclusively
magic8ball - Classic Magic 8 Ball
meow – Make Codybot meow
help - Print this prompt`
    );
  });
}
