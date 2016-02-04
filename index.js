'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:4321/codybot');

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
  console.log('A new message: ', message.text);

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
    
    // Check to see if @codybot was tagged
    if(message.text.indexOf('<@U0J3GQGQ4>') === 0 || message.text.indexOf('@U0LASNADB') === 0) {
      // codybot was tagged. 

      var msgArr = message.text.split(' ');
      var cmd = msgArr[1];
      console.log("cmd: ", cmd);
      if(typeof commands[cmd] === 'function') {
        msgArr.splice(0,2);
        commands[cmd](slack, msgArr, message);
      } else {
        channel.send('codybot doesn\'t recognize the command you specified. Teach him by submitting a PR!');
      }
    }
  });
}

function slackOpen(slack) {
  console.log("Connected to ", slack.team.name, "  as @", slack.self.name);
}
