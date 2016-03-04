// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W7D5', 16, 40),
  who: c.seniors,
  message: '<!channel> Junior/Senior Code Review in 5 minutes'
});

events.push({
  when: date('W7D5', 16, 44),
  who: c.seniors,
  message: '<!channel> Junior/Senior Code Review in 1 minute'
});

module.exports = events;
