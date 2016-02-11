// 'use strict';

var schedule = require('node-schedule');
var slack = require('./slack.js');

module.exports = scheduler;

function scheduler() {
  var hrr11 = slack.students.getChannelGroupOrDMByName('hrr11');
  var hrr12 = slack.students.getChannelGroupOrDMByName('hrr12');
  var hrr13 = slack.students.getChannelGroupOrDMByName('hrr13');
  var general = slack.students.getChannelGroupOrDMByName('general');
  var test = slack.students.getChannelGroupOrDMByName('codydaig');

  var daily9am = new schedule.RecurrenceRule();
  daily9am.dayOfWeek = [1,2,3,4,5,6];
  daily9am.hour = 12;
  daily9am.minute = 35;

  var obj = {
    when: daily9am,
    who: [test],
    message: 'Testing of the 9am Logic'
  };

  //var date = new Date(2016, 01, 11, 11, 00, 0);
  // var date2 = new Date(2016, 01, 11, 11, 55, 0);

  // var j = schedule.scheduleJob(date, function(){
  //   var msg = '<!channel> ';
  //   hrr11.send(msg);
  //   hrr12.send(msg);
  //   hrr13.send(msg);
  // }.bind(this));

  // var k = schedule.scheduleJob(obj.when, function(){
  //   var msg = 'Good Morning!!!';
  //   test.send(obj.message);
  //   // hrr11.send(obj.message);
  //   // hrr12.send(obj.message);
  //   // hrr13.send(obj.message);
  // }.bind(this));
}
