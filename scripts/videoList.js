'use strict';

const videoList = (function(){

  const decorateResponse = function(response) {
    const decorated = response.items.map((item) =>{
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url
      };
    });
    return decorated;
  };
// https://www.youtube.com/watch?v= + "${video.id}"
  const generateListItem = function(video){
    return `
        <li video-id="${video.id}">
        <a href="https://www.youtube.com/watch?v=${video.id}"><h3>${video.title}</h3></a>
        <div class="videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
        </div>
        </li>
          `;
  };
      // <a href="https://www.youtube.com/watch?v=${video.id}"><h3>${video.title}</h3></a>
          // <div><a href="https://www.youtube.com/watch?v=${video.id}"><img src="${video.thumbnail}" alt="${video.title}"/></a></div>
  const render = function() {
    const html = store.videos.map(video => generateListItem(video));
    $('.results').html(html);
  };

  const handleFormSubmit = function() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#search-term').val();
  
      $('#search-term').val('');
      api.fetchVideos(searchTerm, response => {
        const decoratedResponse = decorateResponse(response);
        store.setVideos(decoratedResponse);
        render();
      });
    });
  };
  
  const bindEventListeners = function(){
    handleFormSubmit();
  };

  return{
    render,
    bindEventListeners
  };
}());