'use strict';

var words = require('./composeWords.json');

module.exports = function compose(controller) {
  controller.hears('compose', ['direct_mention'], function(bot, message) {
    bot.reply(message, composeCouplet());
  });
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

  // Writes a single 10ish syllable line of poetry
  var writeLine = function() {
    var syllables = 0;
    var line = '';
    var word;

    // Builds an array of possible rhymes, and selects a random one
    var findRhyme = function() {
      var rhymes = [];

      words[type].forEach(function (word) {
        if (word.rhyme === rhyme) rhymes.push(word);
      });

      // Nouns and verbs should have all the rhymes, but if not,
      // but if not, this failsafe prevents an infinite loop
      if(rhymes.length === 0 && (type === 'noun' || type === 'verb')) {
        return {word: 'orange'};
      }

      // If no rhymes were found, switch type to noun or verb
      if (rhymes.length === 0) {
        type = randElem (['noun','verb']);
        return findRhyme();
      }

      return randElem( rhymes );
    }

    // Selects a random word a possible type and adds it to the line
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

    // On second line, rhyme will be set and must be matched
    if (rhyme) {
      word = findRhyme();
      line += ' ' + word.word;
    } else {
      addWord();
    }
    rhyme = word.rhyme;

    // Formatting
    line = line.trim();
    line = capitalize( line );

    return line;
  };

  return writeLine() + '\n' + writeLine() + randElem( ['.','.','?','!'] );
};
