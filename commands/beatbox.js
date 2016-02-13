'use strict';

module.exports = beatbox;

// function beatbox(slack, args, message) {
//   var channel = slack.getChannelGroupOrDMByID(message.channel);
//   channel.send('Boots and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Boots.');
// }

function beatbox(controller) {
  controller.hears('beatbox', ['direct_mention'], function(bot, message) {
    console.log(message);
    bot.reply(message, 'Boots and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Boots.');
  });
}
