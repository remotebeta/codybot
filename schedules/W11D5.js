// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W11D5', 09, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Job Search & Preparation Kickoff https://zoom.us/j/525181230'
});

events.push({
  when: date('W11D5', 09, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Job Search & Preparation Kickoff https://zoom.us/j/525181230'
});

events.push({
  when: date('W11D5', 14, 25),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Curating Your Online Presence Lecture https://zoom.us/j/525181230'
});

events.push({
  when: date('W11D5', 14, 29),
  who: c.seniors,
  message: '<!channel> 1 Minute until Curating Your Online Presence Lecture https://zoom.us/j/525181230'
});

module.exports = events;
