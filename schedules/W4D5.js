// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W4D5', 10, 00),
  who: c.juniors,
  message: '<!channel> 5 Minutes until the Weekly Retrospective. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W4D5', 10, 04),
  who: c.juniors,
  message: '<!channel> 1 Minute until the Weekly Retrospective. https://zoom.us/j/685772​608'
});

module.exports = events;
