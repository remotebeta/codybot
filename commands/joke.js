'use strict';

module.exports = function joke(controller) {
  controller.hears('joke', ['direct_mention'], function(bot, message) {
    bot.reply(message, tellJoke());
  });
}

var tellJoke = function() {
  // array of jokes
  var tell = ['Dev1 saw a strange JavaScript function & asked, “What is this?”. Dev2 responded, “I don’t know. I would’ve called you, but I was in a bind”',
              'q. How do you comfort a JavaScript bug? a. You console it',
              'q. Why was the JavaScript developer sad? a. Because he didn’t Node how to Express himself',
              'When a JavaScript date has gone bad, “Don’t call me, I’ll callback you. I promise!”',
              'q. Why did the developer go broke? a. Because he used up all his cache',
              'Q: What\'s the object-oriented way to become wealthy? A: Inheritance',
              'Q: What do you call a programmer from Finland? A: Nerdic',
              'What\'s a programmer\'s favorite place to hang out? A: Foo Bar',
              'Why did the programmer quit his job? A: He didn\'t get arrays.',
              'A SQL query goes into a bar, walks up to two tables and asks, "Can I join you?',
              'How many Computer Scientist students does it take to change a lightbulb?  None, that\'s a hardware problem.'];

  // random joke index
  var joke = Math.floor(Math.random * tell.length)

  return tell[joke];
}
