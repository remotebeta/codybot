'use strict';

var words = require('./composeWords.json');

module.exports = compose;

function compose(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);

  channel.send(composeCouplet());
}

// Parts of speech, and which parts may follow
// More than one instance increases chance of selection
var options = {
  punc: ['art','adv','adj','noun','noun','noun','verb','verb','verb'],
  noun: ['punc','punc','adv','adj','adj','conj','art','art','prep','noun','noun','verb','verb','verb'],
  verb: ['art','prep','noun','noun','verb','conj','adv','adj','punc'],
  adj : ['noun','conj','punc'],
  adv : ['verb','verb','adj'],
  art : ['noun'],
  conj: ['art','noun','noun','verb','adj','adj','adv'],
  prep: ['art','prep','noun']
};

// Returns a random element from an array
var randElem = function(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

var capitalize = function(string) {
  return string[0].toUpperCase() + string.slice(1);
};

// Determines whether or not a string is a complete sentence
var isComplete = function(line) {
  var end = line.length - 1;

  if (line[end-1] === '.' || line[end] === '.') return true;
  if (line[end-1] === '?' || line[end] === '?') return true;
  if (line[end-1] === '!' || line[end] === '!') return true;
  return false;
}

// Composes a rhyming couplet of ten syllable lines
var composeCouplet = function() {
  var type = 'punc';
  var rhyme;

  var writeLine = function() {
    var syllables = 0;
    var line = '';
    var word;

    var findRhyme = function() {
      var rhymes = [];

      words[type].forEach(function (word) {
        if (word.rhyme === rhyme) rhymes.push(word);
      });

      if (rhymes.length === 0) {
        type = randElem (['noun','verb']);
        return findRhyme();
      }

      return randElem( rhymes );
    }

    var addWord = function() {
      type = randElem( options[type] );
      word = randElem( words[type] );
      if (type !== 'punc') line += ' ';
      syllables += word.syll;

      if (isComplete(line)) line += capitalize(word.word);
      else line += word.word;
    };

    while (syllables < 9) {
      addWord();
    }

    if (rhyme) {
      word = findRhyme();
      line += word.word;
    } else {
      addWord();
    }
    rhyme = word.rhyme;

    // Formatting
    line = line.trim();
    line = capitalize( line );

    return line;
  };

  return writeLine() + '\n' + writeLine() + randElem( ['.', '.','?', '!'] );
};