// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W4D3', 10, 00),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Verbalization Practice. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W4D3', 10, 04),
  who: c.juniors,
  message: '<!channel> 1 Minute until Verbalization Practice. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W4D3', 14, 00),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W4D3', 14, 10),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W4D3', 14, 14),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W4D3', 16, 45),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W4D3', 16, 55),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W4D3', 16, 59),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

module.exports = events;
