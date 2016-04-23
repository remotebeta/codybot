'use strict';

module.exports = buzz;

var mooTracker = {};

function buzz(slack, args, message) {
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
        channel.send('<!channel> bzzzzzz!!!!!');
      }, i * 2000);
    }
  }
}
