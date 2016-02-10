// 'use strict';

var schedule = require('node-schedule');
var slack = require('./slack.js');

module.exports = scheduler;

function scheduler() {
  var hrr11 = slack.students.getChannelGroupOrDMByName('hrr11');
  var hrr12 = slack.students.getChannelGroupOrDMByName('hrr12');
  var hrr13 = slack.students.getChannelGroupOrDMByName('hrr13');
  var general = slack.students.getChannelGroupOrDMByName('general');

  var date = new Date(2016, 01, 09, 23, 00, 0);
  var date2 = new Date(2016, 01, 09, 22, 50, 0);

  var j = schedule.scheduleJob(date, function(){
    var msg = '<!channel> https://zoom.us/j/525181230 Join us for the After Hours talk tonight where <@codydaig> will take us on a deep dive into express. He\'ll be walking us through how to set-up a brand new express app as well as conceptually what express is doing under the hood.';
    hrr11.send(msg);
    hrr12.send(msg);
    hrr13.send(msg);
  }.bind(this));

  var k = schedule.scheduleJob(date, function(){
    var msg = '<!channel> Friendly reminder that there is an after hours talk tonight on a Express! <@codydaig> will take us on a deep dive into express. He\'ll be walking us through how to set-up a brand new express app as well as conceptually what express is doing under the hood.';
    hrr11.send(msg);
    hrr12.send(msg);
    hrr13.send(msg);
  }.bind(this));
}
