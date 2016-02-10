'use strict';

var env = require('../env.json');

// var Slack = require('slack-client');
// exports.students = new Slack(env.token, true, true);

var Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: true
})

controller.spawn({
  token: env.token
}).startRTM();

exports.controller = controller;
