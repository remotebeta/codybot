// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W6D3', 10, 00),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Verbalization Practice. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D3', 10, 04),
  who: c.juniors,
  message: '<!channel> 1 Minute until Verbalization Practice. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D3', 10, 35),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Greenfield Kickoff. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D3', 10, 39),
  who: c.juniors,
  message: '<!channel> 1 Minute until Greenfield Kickoff. https://zoom.us/j/685772​608'
});

module.exports = events;
