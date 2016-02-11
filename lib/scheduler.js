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

  var events = [];

  var daily855am = new schedule.RecurrenceRule();
  daily9am.dayOfWeek = [1,2,3,4,5,6];
  daily9am.hour = 11;
  daily9am.minute = 55;

  var daily900am = new schedule.RecurrenceRule();
  daily9am.dayOfWeek = [1,2,3,4,5,6];
  daily9am.hour = 12;
  daily9am.minute = 00;

  events.push({
    when: daily855am,
    who: [hrr11],
    message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/525181230'
  });

  events.push({
    when: daily855am,
    who: [hrr12, hrr13],
    message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/685772​608'
  });

  events.forEach(function (event) {
    schedule.scheduleJob(event.when, function () {
      event.who.forEach(function (channel) {
        channel.send(event.message);
      });
    });
  });

  // //var date = new Date(2016, 01, 11, 11, 00, 0);
  // var k = schedule.scheduleJob(obj.when, function(){
  //   var msg = 'Good Morning!!!';
  //   test.send(obj.message);
  //   hrr11.send(obj.message);
  //   hrr12.send(obj.message);
  //   hrr13.send(obj.message);
  // }.bind(this));
}
