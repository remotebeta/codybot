// 'use strict';

// var mongoose = require('./lib/mongoose');
// var Message = mongoose.Message;
// var ids = mongoose.ids;

// var commands = require('./lib/commands.js');
// var slack = require('./lib/slack.js');

// slack.students.on('open', function () {
//     require('./lib/scheduler.js')();
//     slackOpen(slack.students);
//   });
// slack.students.on('message', function (message) {
//   slackMessage(slack.students, message);
// });
// slack.students.on('error', slackError);
// slack.students.login();

// if(slack.staff) {
//   slack.staff.on('open', function () {
//     slackOpen(slack.staff);
//   });
//   slack.staff.on('message', function (message) {
//     slackMessage(slack.staff, message);
//   });
//   slack.staff.on('error', slackError);
//   slack.staff.login();
// }

// function slackError (err) {
//   console.error(err);
// }

// function slackMessage (slack, message) {
//   // console.log('A new message: ', message.text);
//   // console.log(message.channel);
//   try {
//     var msg = new Message({
//       type: message.type,
//       channel: message.channel,
//       user: message.user,
//       text: message.text,
//       ts: message.ts,
//       team: message.team
//     });

//     msg.save(function (err, msg) {
//       if(err) {
//         return console.log(err);
//       }

//       var channel = slack.getChannelGroupOrDMByID(message.channel);

//       var tagged = false;
//       var msgArr = message.text.split(' ');

//       if(message.channel[0] === 'D') {
//         // Assuming a DM with codybot
//         tagged = true;
//       }

//       // Check to see if @codybot was tagged
//       ids.forEach(function (id) {
//         if(message.text.indexOf('<@' + id + '>') === 0) {
//           tagged = true;
//           msgArr.shift();
//         }
//       });

//       if(tagged) {
//         // codybot was tagged.

//         var cmd = msgArr.shift();
//         // console.log("cmd: ", cmd);
//         if(typeof commands[cmd] === 'function') {
//           commands[cmd](slack, msgArr, message);
//         } else {
//           channel.send('codybot doesn\'t recognize the command you specified. Teach him by submitting a PR!');
//         }
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     var channel = slack.getChannelGroupOrDMByName('codydaig');
//     channel.send('CodyBot encountered an Error.');
//     channel.send(err);
//   }

// }

// function slackOpen(slack) {
//   console.log("Connected to ", slack.team.name, "  as @", slack.self.name);
//   ids.push(slack.self.id);
// }

var slack = require('./lib/slack.js');
var commands = require('./commands');
console.log(commands);
var controller = slack.controller;

commands.beatbox(controller);
commands.compose(controller);
commands.morning(controller);

// controller.hears('hello', ['direct_mention'], function(bot, message) {
//   bot.reply(message, 'why, hullo thur');
// })
