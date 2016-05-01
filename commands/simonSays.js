'use strict';

var directions = require('./simonDirections.json');

module.exports = function compose(controller) {
  controller.hears('simon says', ['direct_mention'], function(bot, message) {

    var simonAsk = function(response, convo) {
      var simonSays = [randElem(prefix), randElem(commands)];
      convo.ask(simonSays, function(response, convo) {
        if (simonSays[0] && response.text === simonSays[1]) {
          convo.say('Good job!');
          simonAsk(response, convo);
        } else {
          convo.say('Game Over!');
        }
        convo.next();
      });
    }

    bot.startConversation(message, simonAsk);
  });
}

var prefix = [ "Simon says type the word... ", "Type the word... " ];

var commands = [ "YES", "NO", "GO", "STOP" ];

// Returns a random element from an array
var randElem = function(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};
