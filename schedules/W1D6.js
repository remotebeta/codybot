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

module.exports = events;
