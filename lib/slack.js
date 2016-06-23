'use strict';

var Botkit = require('botkit');
var token = '' || process.env.SLACK_API_TOKEN;
var staff_token = process.env.STAFF_SLACK_API_TOKEN;

var controller = Botkit.slackbot({
  debug: false
});

controller.spawn({
  token: token
}).startRTM();

var staffController = Botkit.slackbot({
  debug: false
});

staffController.spawn({
  token: staff_token
}).startRTM();

exports.controller = controller;
exports.staffController = staffController;
