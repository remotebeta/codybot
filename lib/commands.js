'use strict';

var mongoose = require('mongoose');
var slack = require('./slack.js');

var Rejection = mongoose.model('Rejection');

exports.reject = reject;

function reject(args, message) {
  var companyName = args[0];
  var rejection = new Rejection({
    companyName: companyName,
    user: message.user
  });

  rejection.save(function (err, rejection) {
    if (err) {
      return console.error(err);
    }
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    channel.send('Sounds like you\'re to awesome for ', rejection.companyName, ' anyways!');
  });
  console.log(message._client.users[message.user].real_name, " was rejected from ", companyName)
}
