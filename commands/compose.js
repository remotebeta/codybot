'use strict';

var words = require('./composeWords.json');

module.exports = compose;

// Parts of speech, and which part of speech may follow
var options = {
  start: ['noun', 'verb'],
  noun: ['verb'],
  verb: ['noun']
};

// Returns a random element from an array
var randElem = function(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

// Composes a rhyming couplet of ten syllable lines
var composeCouplet = function() {
  var rhyme;

  var writeLine = function() {
    var syllables = 0;
    var type = 'start';
    var line = '';
    var word;

    while (syllables <= 10) {
      type = randElem( options[type] );
      word = randElem( words[type] );
      line += word.word + ' ';
      syllables += word.syll;
    }
    rhyme = word.rhyme;

    // Formatting
    line = line[0].toUpperCase() + line.slice(1);
    line = line.trim();
    line += randElem( words.punctuation );

    return line;
  };

  return writeLine() + '\n' + writeLine();
};

function compose(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);


  channel.send(composeCouplet());
}