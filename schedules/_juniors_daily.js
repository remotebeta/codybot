// 'use strict';

var c = require('../lib/channels.js');
var d = require('../lib/daily.js');

var events = [];

events.push({
  when: d.daily855am,
  who: c.juniors,
  message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/685772​608'
});

events.push({
  when: d.daily859am,
  who: c.juniors,
  message: '<!channel> Hurry! Kick-off in 1 minute. https://zoom.us/j/685772​608'
});

module.exports = events;
