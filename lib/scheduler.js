// 'use strict';

var schedule = require('node-schedule');
// var c = require('./channels.js');
// var d = require('./daily.js');
// var slack = require('./slack.js');

module.exports = scheduler;

function scheduler() {

  var events = [];

  events = events.concat(require('../schedules/_students_daily.js'));
  events = events.concat(require('../schedules/_juniors_daily.js'));
  events = events.concat(require('../schedules/_seniors_daily.js'));

  events = events.concat(require('../schedules/W1D3.js'));
  events = events.concat(require('../schedules/W1D4.js'));

  var t = new Date(2016, 02, 03, 0, 0, 0);

  // events.push({
  //   when: t.setHours(8).setMinutes(00),
  //   who: c.students,
  //   message: '<!channel> Dinner Time!'
  // });

  events.forEach(function (event) {
    schedule.scheduleJob(event.when, function () {
      event.who.forEach(function (channel) {
        channel.send(event.message);
      });
    }.bind(this));
  });
}
