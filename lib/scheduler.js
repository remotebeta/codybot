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

  events.forEach(function (event) {
    schedule.scheduleJob(event.when, function () {
      event.who.forEach(function (channel) {
        channel.send(event.message);
      });
    }.bind(this));
  });
}
