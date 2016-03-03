// 'use strict';

var c = require('../lib/channels.js');

var events = [];

events.push({
  when: new Date(2016, 02, 03, 08, 45, 0),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

// events.push({
//   when: new Date(2016, 02, 03, 10, 55, 0),
//   who: c.juniors,
//   message: '<!channel> Pairing Begins in 5 minutes!'
// });
//
// events.push({
//   when: new Date(2016, 02, 03, 10, 59, 0),
//   who: c.juniors,
//   message: '<!channel> Pairing Begins in 1 minute!'
// });

events.push({
  when: new Date(2016, 02, 03, 12, 10, 0),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: new Date(2016, 02, 03, 12, 14, 0),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: new Date(2016, 02, 03, 14, 15, 0),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: new Date(2016, 02, 03, 14, 25, 0),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: new Date(2016, 02, 03, 14, 29, 0),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: new Date(2016, 02, 03, 18, 30, 0),
  who: c.juniors,
  message: '<!channel> Dinner is over. Video Lecture Time.'
});

module.exports = events;
