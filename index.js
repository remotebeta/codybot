var slack = require('./lib/slack.js');
var commands = require('./commands');
var staffCommands = require('./staffCommands');
var controller = slack.controller;
var staffController = slack.staffController;
var opSparkController = slack.opSparkController;
var hrController = slack.hrController;
var rptController = slack.rptController;

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/codybot';
MongoClient.connect(url, function(err, db) {
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
    commands[command](controller, db);
    commands[command](staffController, db);
    commands[command](opSparkController, db);
    commands[command](hrController, db);
    commands[command](rptController, db);
  }

  for (var command in staffCommands) {
    staffCommands[command](staffController, db);
    staffCommands[command](hrController, db);
  }
});

// staffController.on('message_received', function(bot, message) {
//   if(message.type === 'hello') {
//     startTest(bot);
//   }
// });
//
// var users = ['U0J6WJYE5', 'U0YTST37B', 'U1CBC3090']; // cody, cara, bianca
// users = ['U0J6WJYE5'];
//
// function startTest(bot){
//   users.forEach(function (userID){
//     bot.startPrivateConversation({user: userID}, function(response, convo){
//       convo.ask('Testing the stand-up feature. So...... What did you do today?', function(response, convo){
//         convo.say('Sweet! Thanks for helping with the test.');
//         console.log(convo.responses);
//         convo.next();
//       });
//     });
//   });
//
// }
