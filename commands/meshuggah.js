'use strict';

module.exports = function meshuggah (controller) {
  // Serve up a Meshuggah video
  controller.hears('Meshuggah', params.triggerEvents, function(bot,message) {
    Scrape.request('https://www.youtube.com/user/Meshuggah', function (err, $) {
      if (err) return console.error(err);
      var videos = $('.channels-content-item .yt-uix-tile-link');
      // ^ Returns array of video objects
      var video = videos[randomIndex(videos)]
      var url = "https://youtube.com" + video.attribs.href;
      bot.reply(message, url);
    });
  });  
};
