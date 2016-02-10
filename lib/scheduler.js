// 'use strict';

var schedule = require('node-schedule');
var slack = require('./lib/slack.js');

module.exports = scheduler;

function scheduler() {
  var hrr11 = slack.getChannelGroupOrDMByName('hrr11');
  var hrr12 = slack.getChannelGroupOrDMByName('hrr12');
  var hrr13 = slack.getChannelGroupOrDMByName('hrr13');
  var channel = slack.getChannelGroupOrDMByName('therealcodybot');

  var date = new Date(2016, 01, 09, 22, 17, 0);

  var j = schedule.scheduleJob(date, function(){
    channel.send('This is an automated test.');
  }.bind(this));
}
