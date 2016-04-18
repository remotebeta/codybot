// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W1D1', 08, 46),
  who: c.juniors,
  message: '<!channel> Good Morning and Welcome to the Hack Reactor Remote Slack! Allow me to introduce myself. My name is codybot. I ws created to bring engineers back to civilization after being buried in code (aka reminding you of live events). To kick things off, here is a 15 minute reminder for the first event of the day. So grab your coffee and get pumped! I\'ll post again in 10 minutes with the zoom link. :-D'
});

events.push({
  when: date('W1D1', 12, 05),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kickoff to Kitchen Time.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 12, 09),
  who: c.juniors,
  message: '<!channel> 1 minute until Kickoff to Kitchen Time.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 13, 25),
  who: c.juniors,
  message: '<!channel> 5 minutes until Life at HackReactor Lecture.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 13, 29),
  who: c.juniors,
  message: '<!channel> 1 minute until Life at HackReactor Lecture.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 16, 45),
  who: c.juniors,
  message: '<!channel> Townhall in 15 minutes. Post your questions here: https://townhall.makerpass.com/'
});

events.push({
  when: date('W1D1', 16, 55),
  who: c.juniors,
  message: '<!channel> 5 minutes until Townhall.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 16, 59),
  who: c.juniors,
  message: '<!channel> 1 minute until Townhall.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 19, 10),
  who: c.juniors,
  message: '<!channel> 5 minutes until Effective Pairing and Feedback Q&A.	https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D1', 19, 14),
  who: c.juniors,
  message: '<!channel> 1 minute until Effective Pairing and Feedback Q&A.	https://zoom.us/j/685772​608'
});

module.exports = events;
