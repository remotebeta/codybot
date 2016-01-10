'use strict';

exports.reject = function (args, message) {
  var companyName = args[0];
  console.log(message._client.users[message.user], " was rejected from ", companyName)
};
