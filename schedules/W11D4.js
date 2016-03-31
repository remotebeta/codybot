// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W11D4', 13, 40),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Thesis Presentations https://zoom.us/j/525181230'
});

events.push({
  when: date('W11D4', 13, 44),
  who: c.seniors,
  message: '<!channel> 1 Minute until Thesis Presentations https://zoom.us/j/525181230'
});

module.exports = events;
