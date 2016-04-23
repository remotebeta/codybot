// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W1D6', 12, 10),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: date('W1D6', 12, 14),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: date('W1D6', 14, 25),
  who: c.juniors,
  message: '<!channel> 5 minutes until your first Sprint Reflection.'
});

events.push({
  when: date('W1D6', 14, 29),
  who: c.juniors,
  message: '<!channel> 1 minutes until your first Sprint Reflection.'
});

events.push({
  when: date('W1D6', 15, 00),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W1D6', 15, 10),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D6', 15, 14),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

// events.push({
//   when: date('W1D6', 16, 40),
//   who: c.juniors,
//   message: '<!channel> 5 Minutes until the Live Lecture on jQuery and Open Source Contributions. https://zoom.us/j/685772​608'
// });
//
// events.push({
//   when: date('W1D6', 16, 44),
//   who: c.juniors,
//   message: '<!channel> 1 Minute until the Live Lecture on jQuery and Open Source Contributions. https://zoom.us/j/685772​608'
// });

module.exports = events;
