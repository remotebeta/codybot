// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W2D5', 10, 00),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Sprint Reflection. Check the cal for the specific link!'
});

events.push({
  when: date('W2D5', 10, 04),
  who: c.juniors,
  message: '<!channel> 1 Minute until Sprint Reflection. Check the cal for the specific link!'
});

module.exports = events;
