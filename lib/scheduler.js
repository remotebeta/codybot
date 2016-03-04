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
      events = events.concat(require(file));
    });

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
  });

}
