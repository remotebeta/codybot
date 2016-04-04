// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W6D1', 09, 30),
  who: c.juniors,
  message: '<!channel> Half way through the Self-Assessment!'
});

events.push({
  when: date('W6D1', 09, 50),
  who: c.juniors,
  message: '<!channel> 10 minutes remaining. Start wrapping up loose ends.'
});

events.push({
  when: date('W6D1', 09, 55),
  who: c.juniors,
  message: '<!channel> 5 minutes remaining. Get your PR prepped and submitted.'
});

events.push({
  when: date('W6D1', 10, 00),
  who: c.juniors,
  message: '<!channel> Self Assessment is complete! Verbalization practice starting in 5 minutes! https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 10, 04),
  who: c.juniors,
  message: '<!channel> Verbalization practice starting in 1 minute! https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 14, 00),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W6D1', 14, 10),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 14, 14),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 16, 25),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Greenfield Brainstorming. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 16, 29),
  who: c.juniors,
  message: '<!channel> 1 Minute until Greenfield Brainstorming. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 18, 55),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Alumni Panel. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D1', 18, 59),
  who: c.juniors,
  message: '<!channel> 1 Minute until Alumni Panel. https://zoom.us/j/685772​608'
});

module.exports = events;
