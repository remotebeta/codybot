'use strict';
var slackApi = require('../lib/slackApi');

module.exports = function yo(controller) {
  controller.hears('yo', ['direct_mention'], function(bot, message) {
    slackApi.getChannelName(message.channel, controller)
      .then(function (name) {
        bot.reply(message, `Yo! (inside the ${name} channel)`);
      });
  });
}
