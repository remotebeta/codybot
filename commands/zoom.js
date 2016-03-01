'use strict';

module.exports = zoom;

var zooms = {
  juniors: 'https://zoom.us/j/685772​608',
  seniors: 'https://zoom.us/j/525181230'
};

function zoom(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);

  var channelName = message._client.channels.C0LFUN4F2.name;

  var link = '';

  if(channelName === 'hrr12' || channelName === 'hrr13') {
    link = zooms.seniors;
  } else if (channelName === 'hrr14' || channelName === 'hrr15') {
    link = zooms.juniors;
  } else {
    return channel.send('I am not aware of a zoom link designated for this channel.');
  }

  channel.send('Here\'s the standard zoom link for your channel: ' + link);
}
