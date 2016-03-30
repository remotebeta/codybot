// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W11D3', 14, 25),
  who: c.seniors,
  message: '<!channel> 5 Minutes until Feature Freeze https://zoom.us/j/525181230'
});

events.push({
  when: date('W11D3', 14, 29),
  who: c.seniors,
  message: '<!channel> 1 Minute until Feature Freeze https://zoom.us/j/525181230'
});

module.exports = events;
