'use strict';

module.exports = function joke(controller) {
  controller.hears('joke', ['direct_mention'], function(bot, message) {
    var tellQ = [
      'Q: How do you comfort a JavaScript bug?',
      'Q: Why was the JavaScript developer sad?',
      'Q: Why did the developer go broke?',
      'Q: What\'s the object-oriented way to become wealthy?',
      'Q: What do you call a programmer from Finland?',
      'Q: What\'s a programmer\'s favorite place to hang out?',
      'Q: Why did the programmer quit his job?',
      'Q: How many Computer Scientist students does it take to change a lightbulb?',
      'Q: Why did the EMTs travel in pairs of two?',
      'Q: What did Node.js say to Express.js when Express.js asked Node.js to hurry things up in an express manner?',
      'A SQL query goes into a bar, walks up to two tables and asks, "Can I join you?'
    ];

    var tellA = [
      'A: You console it',
      'A: Because he didn’t Node how to Express himself',
      'A: Because he used up all his cache',
      'A: Inheritance',
      'A: Nerdic',
      'A: Foo Bar',
      'A: He didn\'t get arrays.',
      'A: None, that\'s a hardware problem',
      'A: Because they wanted to be pair-a-medics',
      'A: There is Node way in callback hell that we will get to go that route, even though you requested it; I promise.',
      null
    ];

    var joke = Math.floor(Math.random() * tellQ.length);
    bot.reply(message, tellQ[joke]);

    setTimeout(() => {
      if(tellA[joke] !== null) {
        bot.reply(message, tellA[joke]);
      }
    }, 5000);
  });
}
