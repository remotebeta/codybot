var slack = require('./lib/slack.js');
var commands = require('./commands');
var controller = slack.controller;

// Commands will be an object that looks something like this:
// {
//   beatbox: [Function: beatbox],
//   caps: [Function: caps],
//   compose: [Function: compose],
//   help: [Function: help],
//   moo: [Function: moo],
//   morning: [Function: morning],
//   test: [Function: test],
//   yo: [Function: yo]
// }
for (var command in commands) {
  commands[command](controller);
}
