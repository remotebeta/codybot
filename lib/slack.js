'use strict';

var Botkit = require('botkit');
var token = '' || process.env.SLACK_API_TOKEN;
var staff_token = process.env.STAFF_SLACK_API_TOKEN;
var opspark_token = process.env.OPSPARK_SLACK_API_TOKEN;
var hr_token = process.env.HR_SLACK_API_TOKEN;
var rpt_token = process.env.RPT_SLACK_API_TOKEN;

var controller = Botkit.slackbot({
  debug: false
});

controller.spawn({
  token: token
}).startRTM();
controller.token = token;

var staffController = Botkit.slackbot({
  debug: false
});

staffController.spawn({
  token: staff_token
}).startRTM();
staffController.token = staff_token;

var hrController = Botkit.slackbot({
  debug: false
});

hrController.spawn({
  token: hr_token
}).startRTM();

var opSparkController = Botkit.slackbot({
  debug: false
});

opSparkController.spawn({
  token: opspark_token
}).startRTM();

var rptController = Botkit.slackbot({
  debug: false
});

rptController.spawn({
  token: rpt_token
}).startRTM();
rptController.token = rpt_token;

exports.controller = controller;
exports.staffController = staffController;
exports.opSparkController = opSparkController;
exports.hrController = hrController;
exports.rptController = rptController;
