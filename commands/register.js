'use strict';

var exec = require('child_process').exec;

var users;

module.exports = function register(controller, db) {

  users = db.collection('users');

  controller.hears(['register'], ['direct_message','mention','direct_mention', 'message_received'], function(bot, message) {
    bot.api.users.info({user: message.user}, function (err, _user) {
      var user = _user.user;
      bot.reply(message, 'Hello ' + user.real_name + '!');
      bot.startPrivateConversation(message, function(response, convo) {
        convo.ask('What is your cohort? Please use all caps. ie.) HRR16', function(response, convo){
          convo.ask('What is your group name? Make sure this matches your slack channel name EXACTLY.', function(response, convo) {
            user.cohort = convo.responses['What is your cohort? Please use all caps. ie.) HRR16'].text;
            user.greenfieldGroup = convo.responses['What is your group name? Make sure this matches your slack channel name EXACTLY.'].text;
            users.insertMany([user], function(err, result){
              if(err) {
                convo.say('Whoops. Something happened and your info was unable to be saved to the database. Please try again. If the error persists please contact remote.beta.communication@')
              } else {
                convo.say('Thanks!');
              }
              convo.next();
            });
          });
          convo.next();
        });
        convo.next();
      });
    });
  });
};
