var $ = require('jquery')

var jsonFlickrApi = function (data) {
  return data
}

$('#input').on('keyup', function (evt) {
  if (evt.keyCode === 13) {
    busca()
  }
})


var busca = function  () {
  $.get({
    url: 'https://api.flickr.com/services/rest',
    data: {
      api_key: '026d26f0c2e252ec152c416857ecd75c',
      method: 'flickr.photos.search',
      user_id: '49143546@N06',
      per_page: '100',
      extras: 'url_n,o_dims,description',
      format: 'json',
      text: $('#input').val()
    }
  })
  .then(function (responseText) {
    return eval(responseText)
  })
  .then(function (response) {
    var photos = response.photos.photo
    var html = ''
    for (var key = 0 ; key < photos.length; key++) {
      var prop = photos[key].o_height / photos[key].o_width;
      if (prop < 1) {
        html += '<img class="img-responsive" src=' + photos[key].url_n + ' />'
      }
    }
    $('#photos').html(html)
    $('.Loading').addClass('is-hidden')
  })
}
