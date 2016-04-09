// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W12D6', 10, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Graduation https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D6', 10, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Graduation https://zoom.us/j/525181230'
});

module.exports = events;
