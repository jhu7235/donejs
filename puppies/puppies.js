require("justifiedGallery");
var $ = require("jquery");

module.exports = function(selector) {
	
  $(selector).html("Loading...");

  $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne',
      dataType: 'jsonp',
      jsonpCallback: "jsonFlickrFeed",
      data: {
          "tags": "puppy",
          "format": "json"
      },
      success: function(response) {
          var html = response.items.map(function(item, index) {
              return '<a href="' + item.link + '">' +
                  '<img alt="' + item.title + '" src="' + item.media.m + '"/>' +
                  '</a>';
          }).join("");
          var root = $("<div>").html(html);

          $(selector).html(root);
          root.justifiedGallery();
      }
  });

};