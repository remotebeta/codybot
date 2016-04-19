// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W1D2', 11, 30),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W1D2', 11, 40),
  who: c.juniors,
  message: '<!channel> 5 minutes until Townhall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D2', 11, 44),
  who: c.juniors,
  message: '<!channel> 1 minute until Townhall.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D2', 12, 10),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: date('W1D2', 12, 14),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: date('W1D2', 16, 30),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W1D2', 16, 40),
  who: c.juniors,
  message: '<!channel> 5 minutes until Townhall.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D2', 16, 44),
  who: c.juniors,
  message: '<!channel> 1 minute until Townhall.	https://zoom.us/j/685772​608'
});

module.exports = events;
