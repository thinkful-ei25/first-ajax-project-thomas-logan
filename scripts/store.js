'use strict';
const store = (function(){
  const videos = [];
  function setVideos(videos){
    this.videos = videos;
  }
  return {
    videos,
    setVideos
  };
}());