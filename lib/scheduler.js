// 'use strict';

var schedule = require('node-schedule');
// var c = require('./channels.js');
// var d = require('./daily.js');
// var date = require('./date.js');
// var slack = require('./slack.js');
var glob = require('glob');
var path = require('path');

module.exports = scheduler;

function scheduler() {

  var events = [];

  glob(path.resolve('./schedules/**/*.js'), function(err, files) {
    files.forEach(function (file) {
      console.log(file);
      events = events.concat(require(file));
    });
  });

  console.log(events);

  events = events.concat('../schedules/_juniors_daily.js');
  events = events.concat('../schedules/_seniors_daily.js');
  events = events.concat('../schedules/_students_daily.js');

  events = events.concat('../schedules/W1D4.js');
  events = events.concat('../schedules/W7D4.js');

  events.forEach(function (event) {
    schedule.scheduleJob(event.when, function () {
      if(Array.isArray(event.who)) {
        event.who.forEach(function (channel) {
          channel.send(event.message);
        });
      } else {
        event.who.send(event.message);
      }
    }.bind(this));
  });
}
