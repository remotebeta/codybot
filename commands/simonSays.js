'use strict';

var prefix = [ 'Simon says type the word: ', 'Type the word: ' ];
var commands = [ 'YES', 'NO', 'GO', 'STOP', 'UP', 'DOWN', 'LEFT', 'RIGHT' ];

// Returns a random element from an array
var randElem = function(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

module.exports = function simonSays(controller) {
  controller.hears('simonsays', ['direct_mention'], function(bot, message) {
    
    // Slack API call to retrieve player's name
    bot.api.users.info({ user: message.user }, function(err, res) {
      var name = res.ok ? ' ' + res.user.profile.first_name : '';

      // Initial reply to indicate start of game
      bot.reply(message, 'Hey' + name + '! Let\'s play Simon Says!');

      // Main asking function
      var simonAsk = function(response, convo) {
        var simonSays = [randElem(prefix), randElem(commands)];
        var simonString = simonSays[0] + simonSays[1];
        var responded = false;

        convo.ask(simonString, function(response, convo) {
          responded = true; // Stops setTimeout callback if player responds in time

          if (simonString[0] === 'S' && response.text === simonSays[1]) {
            convo.say('Good job' + name + '!');
            simonAsk(response, convo);
          } else if (simonString[0] === 'T') {
            convo.say('I didn\'t say Simon says! Game over' + name + '!');
          } else {
            convo.say('Wrong answer' + name + ', game over!');
          }

          convo.next();
        });

        // If no one responds within time limit, either recurse into simonAsk again
        // or end the conversation
        setTimeout(function() {
          if (!responded) {
            if (simonString[0] === 'T') {
              convo.say('Paying attention, I see. Good job!');
              simonAsk(response, convo);
            } else {
              convo.say('Too slow! Game over' + name + '!');
            }

            convo.next();
          }
        }, 4000);
      }

      // Initiate conversation chain
      bot.startConversation(message, simonAsk);
    });
  });
}
