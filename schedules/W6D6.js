// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W6D6', 08, 55),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Summary Assessment Kickoff. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D6', 08, 59),
  who: c.juniors,
  message: '<!channel> 1 Minute until Summary Assessment Kickoff. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W6D6', 15, 00),
  who: c.juniors,
  message: '<!channel> 2 Hours Remaining.'
});

events.push({
  when: date('W6D6', 17, 00),
  who: c.juniors,
  message: '<!channel> 30 Minutes Left! Start wrapping up and getting the PRs submitted.'
});

events.push({
  when: date('W6D6', 17, 15),
  who: c.juniors,
  message: '<!channel> 15 Minutes Left! Get your pull requests in!'
});

events.push({
  when: date('W6D6', 17, 30),
  who: c.juniors,
  message: '<!channel> You made it! The summary assessment is over. If you haven\'t submitted a PR yet, ping HD now and get \'er done!'
});

module.exports = events;
