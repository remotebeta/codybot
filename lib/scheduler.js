// 'use strict';

var schedule = require('node-schedule');
var slack = require('./slack.js');

module.exports = scheduler;

function scheduler() {
  var hrr11 = slack.students.getChannelGroupOrDMByName('hrr11');
  var hrr12 = slack.students.getChannelGroupOrDMByName('hrr12');
  var hrr13 = slack.students.getChannelGroupOrDMByName('hrr13');
  var channel = slack.students.getChannelGroupOrDMByName('therealcodybot');

  var date = new Date(2016, 01, 09, 22, 17, 0);

  var j = schedule.scheduleJob(date, function(){
    channel.send('This is an automated test.');
  }.bind(this));
}
