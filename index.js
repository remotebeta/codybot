'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:4321/codybot');

var ids = [];

var messageSchema = mongoose.Schema({
  type: String,
  channel: String,
  user: String,
  text: String,
  ts: String,
  team: String
});

var Message = mongoose.model('Message', messageSchema);

var rejectionSchema = mongoose.Schema({
  companyName: String,
  user: String
});

mongoose.model('Rejection', rejectionSchema);

var commands = require('./lib/commands.js');
var slack = require('./lib/slack.js');

slack.students.on('open', function () {
    slackOpen(slack.students);
  });
slack.students.on('message', function (message) {
  slackMessage(slack.students, message);
});
slack.students.on('error', slackError);
slack.students.login();

if(slack.staff) {
  slack.staff.on('open', function () {
    slackOpen(slack.staff);
  });
  slack.staff.on('message', function (message) {
    slackMessage(slack.staff, message);
  });
  slack.staff.on('error', slackError);
  slack.staff.login();
}

function slackError (err) {
  console.error(err);
}

function slackMessage (slack, message) {
  // console.log('A new message: ', message.text);
  // console.log(message.channel);

  var msg = new Message({
    type: message.type,
    channel: message.channel,
    user: message.user,
    text: message.text,
    ts: message.ts,
    team: message.team
  });

  msg.save(function (err, msg) {
    if(err) {
      return console.log(err);
    }

    var channel = slack.getChannelGroupOrDMByID(message.channel);

    var tagged = false;
    var msgArr = message.text.split(' ');

    if(message.channel[0] === 'D') {
      // Assuming a DM with codybot
      tagged = true;
    }

    // Check to see if @codybot was tagged
    ids.forEach(function (id) {
      if(message.text.indexOf('<@' + id + '>') === 0) {
        tagged = true;
        msgArr.shift();
      }
    });

    if(tagged) {
      // codybot was tagged.

      var cmd = msgArr.shift();
      // console.log("cmd: ", cmd);
      if(typeof commands[cmd] === 'function') {
        commands[cmd](slack, msgArr, message);
      } else {
        channel.send('codybot doesn\'t recognize the command you specified. Teach him by submitting a PR!');
      }
    }
  });
}

function slackOpen(slack) {
  console.log("Connected to ", slack.team.name, "  as @", slack.self.name);
  ids.push(slack.self.id);
}
