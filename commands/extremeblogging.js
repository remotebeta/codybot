'use strict';

var schedule = require('node-schedule');

module.exports = function() {};

// function addMinutes(date, minutes) {
//   return new Date(date.getTime() + minutes*60000);
// }

// function extremeblogging(slack, args, message) {
//   var channel = slack.getChannelGroupOrDMByID(message.channel);

//   var start = new Date();
//   start.setSeconds(1);
//   start = addMinutes(start, 1);

//   channel.send('<!channel> Welcome to Extreme Blogging!')
//   channel.send('<!channel> Let\'s start by Split into groups of 2 or 3.')

//   schedule.scheduleJob(addMinutes(start, 1), function(){
//     channel.send('<!channel> Each person needs to generate a list of 5 potential blog topics. (You\'ve got 4 minutes.)');
//   });

//   schedule.scheduleJob(addMinutes(start, 5), function(){
//     channel.send('<!channel> Use your pair\'s brains to eliminate 4 of those. Help your pair eliminate 4 of their ideas. Spend 30 seconds on each idea + 30 seconds to decide. (5 min total)');
//   });

//   schedule.scheduleJob(addMinutes(start, 10), function(){
//     channel.send('<!channel> Write a blog post! (20 minutes)');
//   });

//   schedule.scheduleJob(addMinutes(start, 30), function(){
//     channel.send('<!channel> Give and recieve feedback from your pair. (5 minutes each)');
//   });

//   schedule.scheduleJob(addMinutes(start, 40), function(){
//     channel.send('<!channel> Publish your post and respond with an emoji response to celebrate!');
//   });
// }
