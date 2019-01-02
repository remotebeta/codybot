'use strict';

var Botkit = require('botkit');
var token = '' || process.env.SLACK_API_TOKEN;
//var staff_token = process.env.STAFF_SLACK_API_TOKEN;
//var opspark_token = process.env.OPSPARK_SLACK_API_TOKEN;
var hr_token = process.env.HR_SLACK_API_TOKEN;
var rpt_token = process.env.RPT_SLACK_API_TOKEN;

var hrsf110_token = process.env.HRSF110_SLACK_API_TOKEN;
var hrsf111_token = process.env.HRSF111_SLACK_API_TOKEN;

console.log(hr_token);

var controller = Botkit.slackbot({
  debug: false
});

controller.spawn({
  token: token
}).startRTM();
controller._token = token;

// var staffController = Botkit.slackbot({
//   debug: false
// });

// staffController.spawn({
//   token: staff_token
// }).startRTM();
// staffController._token = staff_token;

var hrController = Botkit.slackbot({
  debug: false
});

hrController.spawn({
  token: hr_token
}).startRTM();

// var opSparkController = Botkit.slackbot({
//   debug: false
// });

// opSparkController.spawn({
//   token: opspark_token
// }).startRTM();

var rptController = Botkit.slackbot({
  debug: false
});

rptController.spawn({
  token: rpt_token
}).startRTM();
rptController._token = rpt_token;

var testController = Botkit.slackbot({
  debug: flase
});

testController.spawn({
  token: 'xoxb-491584642215-490588020740-lz5c6pqh2M5sYfe1oljPT1aR'
}).startRTM();
testController._token = 'xoxb-491584642215-490588020740-lz5c6pqh2M5sYfe1oljPT1aR';

var hrsf110Controller = Botkit.slackbot({
  debug: false
});

hrsf110Controller.spawn({
  token: hrsf110_token
}).startRTM();
hrsf110Controller._token = hrsf110_token;

var hrsf111Controller = Botkit.slackbot({
  debug: false
});

hrsf111Controller.spawn({
  token: hrsf111_token
}).startRTM();
hrsf111Controller._token = hrsf111_token;

// var hrsf104Controller = Botkit.slackbot({
//   clientId: '432661838674.470874938864',
//   clientSecret: '41903831a6570a3782fcb13d53fc0024',
//   scopes: ['bot', 'users:read', 'users.profile:read', 'usergroups:read', 'team:read', 'stars:read', 'reactions:write', 'reactions:read', 'im:write', 'im:read', 'im:history', 'identity.basic:user', 'identity.basic', 'groups:write', 'groups:read', 'emoji:read', 'chat:write:user', 'chat:write:bot', 'channels:write', 'channels:read'],
//   clientSigningSecret: 'ad5ba0d5dbd2f83f3833b41641765052'
// });

// hrsf104Controller.spawn().startRTM();

exports.controller = controller;
//exports.staffController = staffController;
//exports.opSparkController = opSparkController;
exports.hrController = hrController;
exports.rptController = rptController;

exports.hrsf110Controller = hrsf110Controller;
exports.hrsf111Controller = hrsf111Controller;

exports.testController = testController;
