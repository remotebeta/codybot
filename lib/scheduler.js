// 'use strict';

var d = require('./daily.js');
var schedule = require('node-schedule');
// var slack = require('./slack.js');
var c = require('./channels.js');

module.exports = scheduler;

function scheduler() {

  var events = [];

  // Daily Events
  events.push({
    when: d.daily855am,
    who: c.seniors,
    message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/525181230'
  });

  events.push({
    when: d.daily859am,
    who: c.seniors,
    message: '<!channel> Hurry! Kick-off in 1 minute. https://zoom.us/j/525181230'
  });

  events.push({
    when: d.daily855am,
    who: c.juniors,
    message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/685772​608'
  });

  events.push({
    when: d.daily859am,
    who: c.juniors,
    message: '<!channel> Hurry! Kick-off in 1 minute. https://zoom.us/j/685772​608'
  });

  events.push({
    when: d.daily1230pm,
    who: c.students,
    message: '<!channel> Enjoy your lunch!!'
  });

  events.push({
    when: d.daily530pm,
    who: c.students,
    message: '<!channel> Dinner Time!'
  });

  // events.push({
  //   when: d.daily625pm,
  //   who: everyone,
  //   message: '<!channel> Student Presentations in 5 minutes. https://zoom.us/j/525181230'
  // });

  // events.push({
  //   when: d.daily629pm,
  //   who: [hrr11, hrr12, hrr13],
  //   message: '<!channel> Student Presentations in 1 minute. https://zoom.us/j/525181230'
  // });

  // Scheduled Events
  // events.push({
  //   when: new Date(2016, 01, 13, 15, 05, 0),
  //   who: [hrr12, hrr13],
  //   message: '<!channel> Town Hall is starting in 10 minutes. Post your questions now: https://townhall.makerpass.com/townhalls/hrr1213/shortly-angular-solution/57ELegvoBDztWf5PL'
  // });
  //
  // events.push({
  //   when: new Date(2016, 01, 13, 15, 10, 0),
  //   who: [hrr12, hrr13],
  //   message: '<!channel> Town hall is starting in 5 minutes! https://zoom.us/j/685772​608'
  // });
  //
  // events.push({
  //   when: new Date(2016, 01, 13, 16, 14, 0),
  //   who: [hrr12, hrr13],
  //   message: '<!channel> Town hall is starting in 1 minute! https://zoom.us/j/685772​608'
  // });
  //
  // events.push({
  //   when: new Date(2016, 01, 15, 16, 25, 0),
  //   who: [hrr12, hrr13],
  //   message: '<!channel> Brainstorming session starting in 5 minutes! https://zoom.us/j/685772​608'
  // });
  //
  // events.push({
  //   when: new Date(2016, 01, 15, 16, 29, 0),
  //   who: [hrr12, hrr13],
  //   message: '<!channel> Brainstorming session starting in 1 minute! https://zoom.us/j/685772​608'
  // });

  events.push({
    when: d.daily625pm,
    who: c.seniors,
    message: '<!channel> Student Presentations in 5 minutes. https://zoom.us/j/525181230'
  });

  events.push({
    when: d.daily629pm,
    who: c.seniors,
    message: '<!channel> Student Presentations in 1 minute. https://zoom.us/j/525181230'
  });

  events = events.concat(require('../schedules/W1D3.js'));

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
