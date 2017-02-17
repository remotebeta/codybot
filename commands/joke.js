'use strict';

module.exports = function joke(controller) {
  controller.hears('joke', ['direct_mention'], function(bot, message) {
    var tell = [
      'Q: How do you comfort a JavaScript bug? A: You console it',
      'Q: Why was the JavaScript developer sad? A: Because he didn’t Node how to Express himself',
      'Q: Why did the developer go broke? A: Because he used up all his cache',
      'Q: What\'s the object-oriented way to become wealthy? A: Inheritance',
      'Q: What do you call a programmer from Finland? A: Nerdic',
      'Q: What\'s a programmer\'s favorite place to hang out? A: Foo Bar',
      'Q: Why did the programmer quit his job? A: He didn\'t get arrays.',
      'Q: How many Computer Scientist students does it take to change a lightbulb? A: None, that\'s a hardware problem',
      'A SQL query goes into a bar, walks up to two tables and asks, "Can I join you?'
    ];

    var joke = Math.floor(Math.random * tell.length);
    bot.reply(message, tell[joke]);
  });
}