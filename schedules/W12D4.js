// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W12D4', 09, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Narrative Pitch Showcase https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D4', 09, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Narrative Pitch Showcase https://zoom.us/j/525181230'
});

module.exports = events;
