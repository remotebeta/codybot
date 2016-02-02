'use strict';

var mongoose = require('mongoose');
var slack = require('./slack.js');

var Rejection = mongoose.model('Rejection');

exports.beatbox = beatbox;
exports.help = help;
exports.moo = moo;
exports.morning = morning;
exports.reject = reject;

var mooTracker = {};

function beatbox(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Boots and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Boots.');
}

function help(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('I\'m codybot! \n\n\
    Usage: `@codybot: <command>`\n\n\
    Commands: \n\
    moo - Moos the current channel 5 times. Limit one use per channel per 30 min. \n\
    reject <comanyName> - Records that you were rejected from that company. \n\
    help - Prints this prompt \
    ');
}

function moo(args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  
  var okayToSend = true;
  
  var lastVisit = mooTracker[message.channel];
  if(lastVisit) {
    var thirtyMinutes = 30 * 60000; // 60000 being the number of milliseconds in a minute
    var now = new Date();
    var thirtyMinutesAgo = new Date(now - thirtyMinutes);
    if (lastVisit > thirtyMinutesAgo) {
      okayToSend = false;
    }
  }
  
  if(okayToSend) {
    mooTracker[message.channel] = new Date();
    for(var i=0; i < 5; i++) {
      setTimeout(function () {
        channel.send('<!channel> Mooooo!!!!!');
      }, i * 2000);
    }
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
