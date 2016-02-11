// 'use strict';

var schedule = require('node-schedule');
var slack = require('./slack.js');

module.exports = scheduler;

function scheduler() {
  var general = slack.students.getChannelGroupOrDMByName('general');
  var hrr11 = slack.students.getChannelGroupOrDMByName('hrr11');
  var hrr12 = slack.students.getChannelGroupOrDMByName('hrr12');
  var hrr13 = slack.students.getChannelGroupOrDMByName('hrr13');
  var test = slack.students.getChannelGroupOrDMByName('codydaig');

  var events = [];

  var daily855am = new schedule.RecurrenceRule();
  daily855am.dayOfWeek = [1,2,3,4,5,6];
  daily855am.hour = 8;
  daily855am.minute = 55;

  var daily900am = new schedule.RecurrenceRule();
  daily900am.dayOfWeek = [1,2,3,4,5,6];
  daily900am.hour = 9;
  daily900am.minute = 00;

  var daily1230pm = new schedule.RecurrenceRule();
  daily1230pm.dayOfWeek = [1,2,3,4,5,6];
  daily1230pm.hour = 12;
  daily1230pm.minute = 30;

  var daily430pm = new schedule.RecurrenceRule();
  daily430pm.dayOfWeek = [1,2,3,4,5,6];
  daily430pm.hour = 17;
  daily430pm.minute = 30;

  var daily530pm = new schedule.RecurrenceRule();
  daily530pm.dayOfWeek = [1,2,3,4,5,6];
  daily530pm.hour = 17;
  daily530pm.minute = 30;

  var daily625pm = new schedule.RecurrenceRule();
  daily625pm.dayOfWeek = [1,2,3,4,5,6];
  daily625pm.hour = 18;
  daily625pm.minute = 25;

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

  events.push({
    when: daily1230pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Enjoy your lunch!!'
  });

  events.push({
    when: daily530pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Dinner Time!'
  });

  events.push({
    when: daily625pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Student Presentation Time!! https://zoom.us/j/525181230'
  });

  events.forEach(function (event) {
    schedule.scheduleJob(event.when, function () {
      event.who.forEach(function (channel) {
        channel.send(event.message);
      });
    }.bind(this));
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
