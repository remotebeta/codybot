// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W8D3', 09, 55),
  who: c.seniors,
  message: '<!channel> Whiteboarding with Robin and Cody starting in 5 minutes! Live! https://zoom.us/j/525181​230'
});

events.push({
  when: date('W8D3', 09, 59),
  who: c.seniors,
  message: '<!channel> Whiteboarding with Robin and Cody starting in 1 minute! Live! https://zoom.us/j/525181​230'
});

events.push({
  when: date('W8D3', 10, 55),
  who: c.seniors,
  message: '<!channel> Summary Assessment Review in 5 minutes! https://zoom.us/j/525181​230'
});

events.push({
  when: date('W8D3', 10, 59),
  who: c.seniors,
  message: '<!channel> Summary Assessment Review in 1 minute! https://zoom.us/j/525181​230'
});

module.exports = events;
