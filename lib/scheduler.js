// 'use strict';

var schedule = require('node-schedule');
var slack = require('./slack.js');

module.exports = scheduler;

function scheduler() {
  var hrr11 = slack.students.getChannelGroupOrDMByName('hrr11');
  var hrr12 = slack.students.getChannelGroupOrDMByName('hrr12');
  var hrr13 = slack.students.getChannelGroupOrDMByName('hrr13');
  var general = slack.students.getChannelGroupOrDMByName('general');

  //var date = new Date(2016, 01, 11, 11, 00, 0);
  var date2 = new Date(2016, 01, 11, 10, 55, 0);

  // var j = schedule.scheduleJob(date, function(){
  //   var msg = '<!channel> ';
  //   hrr11.send(msg);
  //   hrr12.send(msg);
  //   hrr13.send(msg);
  // }.bind(this));

  var k = schedule.scheduleJob(date2, function(){
    var msg = 'Good Morning!!!';
    hrr11.send(msg);
    hrr12.send(msg);
    hrr13.send(msg);
  }.bind(this));
}
