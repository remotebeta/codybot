'use strict';

var mongoose = require('mongoose');
var slack = require('./slack.js');

var Rejection = mongoose.model('Rejection');

exports.help = help;
exports.moo = moo;
exports.morning = morning;
exports.reject = reject;
exports.test = test;

function help(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('I\'m codybot! \n\n\
    Usage: `@codybot: <command>`\n\n\
    Commands: \n\
    reject <comanyName> - Records that you were rejected from that company. \n\
    help - Prints this prompt \
    ');
}

function moo(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  for(var i=0; i < 10; i++) {
    setTimeout(function () {
      channel.send('<!channel> Mooooo!!!!!');
    }, i * 1500);
  }
}

function morning(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Goooooooooood Morning!!!!!!!!!!');
}

function reject(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);

  var companyName = args[0];
  var rejection = new Rejection({
    companyName: companyName,
    user: message.user,
    timestamp: { type: Date, default: Date.now }
  });

  Rejection.find({
    companyName: companyName,
    user: message.user
  }).exec(function (err, rejections) {
    if(rejections.length > 0) {
      channel.send('This information is already in my database. Thanks for reminding me though.');
    } else {
      rejection.save(function (err, rejection) {
        if (err) {
          return console.error(err);
        }
        
        channel.send('Sounds like you\'re too awesome for ' + rejection.companyName + ' anyways!');
      });
    }
  });
}

function test(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('<!channel> This is a test of making an announcement to the entire channel.');
}
