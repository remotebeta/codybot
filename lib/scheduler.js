// 'use strict';

var d = require('./daily.js');
var schedule = require('node-schedule');
// var slack = require('./slack.js');
var c = require('./channels.js');

module.exports = scheduler;

function scheduler() {

  var events = [];

  events = events.concat(require('../schedules/_students_daily.js'));
  events = events.concat(require('../schedules/_juniors_daily.js'));
  events = events.concat(require('../schedules/_seniors_daily.js'));

  events = events.concat(require('../schedules/W1D3.js'));

  events.forEach(function (event) {
    schedule.scheduleJob(event.when, function () {
      event.who.forEach(function (channel) {
        channel.send(event.message);
      });
    }.bind(this));
  });
}
