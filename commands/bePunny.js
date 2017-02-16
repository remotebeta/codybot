'use strict';

module.exports = function bePunny(controller) {
  controller.hears('be punny', ['direct_mention'], function(bot, message) {
    var puns = [
      'A plateau is the highest form of flattery.',
      'It\’s hard to explain puns to kleptomaniacs because they always take things literally.',
      'Time flies like an arrow, fruit flies like a banana.',
      'What\'s the best thing about Switzerland? I don\'t know, but their flag is a huge plus.',
      'A Buddhist walks up to a hotdog stand and says, \"Make me one with everything.\"',
      'I\'m addicted to brake fluid, but I can stop whenever I want.',
      'I told my doctor that I broke my arm in two places. He told me to stop going to those places.',
      'What\'s orange and sounds like a parrot? A carrot.',
      'I hate Russian dolls... so full of themselves',
      'What\'s E.T. short for? Because he\'s only got little legs.',
      '\"I stand corrected,\" said the man in the orthopedic shoes.',
      'Did you hear about the fire at the circus? It was in tents.',
      'Wanna hear a joke about Potassium? Yes? K.',
      'What\'s the difference between a golfer and a skydiver? A golfer goes *whack* \"damn\" and a skydiver goes \"damn\" *whack*',
      'Rick Astley will let you borrow any movie from his Pixar collection, except one. He\'s never gonna give you Up.',
      'There\'s no \"I\" in Denial.',
      'Exaggerations went up by a million percent last year.',
      'They all laughed when I said I wanted to be a comedian. Well, they\'re not laughing now.',
      'I used to be addicted to soap, but I\'m clean now.',
      'What do you call a magic dog? A Labracadabrador.',
      'I was wondering why does a frisbee appear larger the closer it gets.... then it hit me.',
      'I didn\'t know my dad was a construction site thief, but when I got home all the signs were there.'
    ];

    var index = Math.floor(Math.random()*puns.length);
    bot.reply(message, puns[index]);
  });
}