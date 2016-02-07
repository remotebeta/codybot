'use strict';

var mongoose = require('mongoose');

var Message = mongoose.model('Message');

module.exports = caps;

function caps(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);

  // remove the @ from the Slack username
  var userID = args.shift();
  var userName = userID.slice(2, userID.length-1);

  var mutateMessage = function(message) {
    var toCaps = message.toUpperCase();
    // strip the punctuation
    var toLol = toCaps.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    // make sure there aren't multiple spaces in a row
    var tidy = toLol.replace(/\s{2,}/g, ' ');
    var excited = tidy + '!!1!';
    return excited;
  };

  Message.find({ user: userName })
    .where('channel').equals(message.channel)
    .sort({'ts' : -1}) // not sure if this is right
    .limit(1)
    .select('text')
    .exec(function(err, message) {
      if (err) {
        return console.error(err);
      }
      console.log(message);

      channel.send(mutateMessage(message));
    });

}
