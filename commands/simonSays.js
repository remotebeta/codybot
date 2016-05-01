'use strict';

var prefix = [ "Simon says type the word... ", "Type the word... " ];
var commands = [ "YES", "NO", "GO", "STOP" ];

// Returns a random element from an array
var randElem = function(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

module.exports = function simonSays(controller) {
  controller.hears('simonsays', ['direct_mention'], function(bot, message) {

    var simonAsk = function(response, convo) {
      var simonSays = [randElem(prefix), randElem(commands)];
      var simonString = simonSays[0] + simonSays[1];
      convo.ask(simonString, function(response, convo) {
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
