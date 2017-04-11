'use strict';

var exec = require('child_process').exec;

var $$users = {};
var standups;

module.exports = function reboot(controller, db) {

  standups = db.collection('standups');

  controller.hears(['standup'], ['direct_message','mention','direct_mention', 'message_received'], function(bot, message) {
    bot.api.users.info({user: message.user}, function (err, user) {
      $$users[message.user] = user.user;
      // console.log(user);
      // convo.$user = user;
      bot.reply(message, 'Hello ' + user.user.real_name + '!');
      bot.startPrivateConversation(message, step1);
    });
  });
};

function step1(response, convo) {
  convo.ask('What did you do yesterday?', function(response, convo) {
    step2(response, convo);
    convo.next();
  });
}

function step2(response, convo) {
  convo.ask('What will you do today?', function(response, convo) {
    step3(response, convo);
    convo.next();
  });
}

function step3(response, convo) {
  convo.ask('Do you have any pain points / road blocks?', function(response, convo) {
    step4(response, convo);
    convo.next();
  });
}

function step4(response, convo) {
  convo.ask('What is 1 win that you have experienced in the last 24 hours?', function(response, convo) {
    step5(response, convo);
    convo.next();
  });
}

function step5(response, convo) {

  var obj = {};
  obj.userID = convo.responses['What did you do yesterday?'].user;
  obj.userName = $$users[obj.userID].real_name;
  obj.timestamp = Date.now();
  obj.responses = convo.responses;
  console.log(obj);

  standups.insertMany([obj], function(err, result) {
    if(err) {
      convo.say('Whoops. Something happened and your standup was unable to be saved to the database. Please try again. If the error persists please contact hrr.communication@hackreactor.com')
    } else {
      convo.say('Thank you!');
    }
    convo.next();
  });
}
