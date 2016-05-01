var slack = require('./lib/slack.js');
var commands = require('./commands');
var staffCommands = require('./staffCommands');
var controller = slack.controller;
var staffController = slack.staffController;

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
  commands[command](staffController);
}

for (var command in staffCommands) {
  staffCommands[command](staffController);
}
