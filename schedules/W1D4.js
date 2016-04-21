// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W1D4', 08, 45),
  who: c.juniors,
  message: '<!channel> Townhall after your morning lecture. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W1D4', 12, 10),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: date('W1D4', 12, 14),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: date('W1D4', 14, 15),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W1D4', 14, 25),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D4', 14, 29),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D4', 18, 30),
  who: c.juniors,
  message: '<!channel> Dinner is over. Video Lecture Time.'
});

module.exports = events;
