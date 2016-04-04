// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W12D1', 14, 25),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Pipeline Tracking Overview https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D1', 14, 29),
  who: c.seniors,
  message: '<!channel> 1 Minute until Pipeline Tracking Overview https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D1', 16, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Cover Letter Showcase https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D1', 16, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Cover Letter Showcase https://zoom.us/j/525181230'
});

module.exports = events;
