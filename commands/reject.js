'use strict';

var Rejection = require('../lib/mongoose.js').Rejection;

module.exports = function reject(controller) {
  controller.hears('reject', ['direct_mention'], function(bot, message) {
    // This feels a bit hackish...is there a better way to do this?
    var companyName = message.text.split(' ').slice(1).join(' ');

    var rejection = new Rejection({
      companyName: companyName,
      user: message.user,
      timestamp: { type: Date, default: Date.now }
    });

    Rejection.find({
      companyName: companyName,
      // The message.user with botkit isn't actually the literal username
      // Rather, it seems to be a hashed string based off the username
      // For instance: for my username, 'fict1on', message.user is 'U0LFRMESZ'
      user: message.user
    }).exec(function (err, rejections) {
      if(rejections.length > 0) {
        bot.reply(message, 'This information is already in my database. Thanks for reminding me though.');
      } else {
        rejection.save(function (err, rejection) {
          if (err) {
            return console.error(err);
          }
          bot.reply(message, 'Sounds like you\'re too awesome for ' + rejection.companyName + ' anyways!');
        });
      }
    });
  })
}
