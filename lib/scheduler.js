// 'use strict';

var d = require('./daily.js');
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

  // Daily Events
  events.push({
    when: d.daily855am,
    who: [hrr11],
    message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/525181230'
  });

  events.push({
    when: d.daily859am,
    who: [hrr11],
    message: '<!channel> Hurry! Kick-off in 1 minute. https://zoom.us/j/525181230'
  });

  events.push({
    when: d.daily855am,
    who: [hrr12, hrr13],
    message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/685772​608'
  });

  events.push({
    when: d.daily859am,
    who: [hrr12, hrr13],
    message: '<!channel> Hurry! Kick-off in 1 minute. https://zoom.us/j/685772​608'
  });

  events.push({
    when: d.daily1230pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Enjoy your lunch!!'
  });

  events.push({
    when: d.daily530pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Dinner Time!'
  });

  events.push({
    when: d.daily625pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Student Presentations in 5 minutes. https://zoom.us/j/525181230'
  });

  events.push({
    when: d.daily629pm,
    who: [hrr11, hrr12, hrr13],
    message: '<!channel> Student Presentations in 1 minute. https://zoom.us/j/525181230'
  });

  // Scheduled Events
  events.push({
    when: new Date(2016, 01, 11, 15, 00, 0),
    who: [hrr12, hrr13],
    message: '<!channel> Town Hall is starting in 15 minutes. Post your questions now: https://townhall.makerpass.com/townhalls/hrr1213/shortly-angular-solution/57ELegvoBDztWf5PL'
  });

  events.push({
    when: new Date(2016, 01, 11, 15, 10, 0),
    who: [hrr12, hrr13],
    message: '<!channel> Town hall is starting in 5 minutes! https://zoom.us/j/685772​608'
  });

  events.push({
    when: new Date(2016, 01, 11, 16, 14, 0),
    who: [hrr12, hrr13],
    message: '<!channel> Town hall is starting in 1 minute! https://zoom.us/j/685772​608'
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
