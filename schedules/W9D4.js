// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W9D4', 13, 40),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Thesis Presentations!'
});

events.push({
  when: date('W9D4', 13, 44),
  who: c.juniors,
  message: '<!channel> 1 Minute until Thesis Presentations!'
});

module.exports = events;
