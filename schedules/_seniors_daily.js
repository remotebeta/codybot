// 'use strict';

var c = require('../lib/channels.js');
var d = require('../lib/daily.js');

var events = [];

events.push({
  when: d.daily855am,
  who: c.seniors,
  message: '<!channel> Good Morning!! Let\'s kick this morning off right. https://zoom.us/j/525181230'
});

events.push({
  when: d.daily859am,
  who: c.seniors,
  message: '<!channel> Hurry! Kick-off in 1 minute. https://zoom.us/j/525181230'
});
/* Removing for blinky dancer presentations
events.push({
  when: d.daily625pm,
  who: c.seniors,
  message: '<!channel> Student Presentations in 5 minutes. https://zoom.us/j/525181230'
});

events.push({
  when: d.daily629pm,
  who: c.seniors,
  message: '<!channel> Student Presentations in 1 minute. https://zoom.us/j/525181230'
});
*/
module.exports = events;
