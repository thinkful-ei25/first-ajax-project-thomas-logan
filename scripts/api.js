'use strict';
const api = (function(){
  const API_KEY = 'AIzaSyCFqTqgsaYQe2MWggOTbdX4DZnWImpE_9U';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm
    };

    $.getJSON(BASE_URL, query, callback);
  };

  return{
    fetchVideos
  };
}());