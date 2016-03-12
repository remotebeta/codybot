// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W2D6', 16, 25),
  who: c.juniors,
  message: '<!channel> 5 Minutes until the optional Recursion check-in. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W2D6', 16, 29),
  who: c.juniors,
  message: '<!channel> 1 Minute until the optional Recursion check-in. https://zoom.us/j/685772​608'
});

module.exports = events;
