// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W12D2', 09, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Cover Letter Showcase https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D2', 09, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Cover Letter Showcase https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D2', 13, 25),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Developing your Narrative Pitch https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D2', 13, 29),
  who: c.seniors,
  message: '<!channel> 1 Minute until Developing your Narrative Pitch https://zoom.us/j/525181230'
});

module.exports = events;
