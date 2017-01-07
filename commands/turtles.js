'use strict';

module.exports = function turtles(controller) {
  controller.hears('What is the tortoise standing on?', ['direct_mention'], function(bot, message) {
    bot.reply(message, "It's turtles all the way down!");
  });
}