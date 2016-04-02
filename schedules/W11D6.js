// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W11D6', 09, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Kickoff for Group Review https://zoom.us/j/525181230'
});

events.push({
  when: date('W11D6', 09, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Kickoff for Group Review https://zoom.us/j/525181230'
});

module.exports = events;
