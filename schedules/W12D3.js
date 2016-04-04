// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W12D3', 09, 55),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Job Search Kickoff https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D3', 09, 59),
  who: c.seniors,
  message: '<!channel> 1 Minute until Job Search Kickoff https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D3', 14, 25),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Communicating Technical https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D3', 14, 29),
  who: c.seniors,
  message: '<!channel> 1 Minute until Communicating Technical https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D3', 19, 25),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Alumni Panel Q&A https://zoom.us/j/525181230'
});

events.push({
  when: date('W12D3', 19, 29),
  who: c.seniors,
  message: '<!channel> 1 Minute until Alumni Panel Q&A https://zoom.us/j/525181230'
});

module.exports = events;
