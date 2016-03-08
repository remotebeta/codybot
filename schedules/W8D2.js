// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W8D2', 09, 55),
  who: c.seniors,
  message: '<!channel> Sprint Reflection in 5 Minutes!'
});

events.push({
  when: date('W8D2', 09, 59),
  who: c.seniors,
  message: '<!channel> Sprint Reflection in 1 Minute!'
});

events.push({
  when: date('W8D2', 18, 55),
  who: c.seniors,
  message: '<!channel> HiR Q&A in 5 Minutes! (optional) https://zoom.us/j/525181230'
});

events.push({
  when: date('W8D2', 18, 59),
  who: c.seniors,
  message: '<!channel> HiR Q&A in 1 Minute! (optional) https://zoom.us/j/525181230'
});

module.exports = events;
