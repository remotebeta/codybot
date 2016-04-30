'use strict';

var Botkit = require('botkit');
var token = '' || process.env.SLACK_API_TOKEN;
var staff_token = process.env.STAFF_SLACK_API_TOKEN;

var controller = Botkit.slackbot({
  debug: true
});

controller.spawn({
  token: token
}).startRTM();

exports.controller = controller;
