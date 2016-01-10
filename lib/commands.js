'use strict';

exports.reject = function (arguments, message) {
  var companyName = arguments[0];
  console.log(message._client.Client.users[message.user], " was rejected from ", companyName)
};
