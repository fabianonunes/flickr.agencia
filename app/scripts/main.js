var $ = require('jquery')
var FlickrApi = require('./lib/flickr-api')

var templatePugPhoto = require('./templates/photo.pug')

var api = new FlickrApi('026d26f0c2e252ec152c416857ecd75c')
var $loading = $('.Loading')

$('#input').on('keyup', function (evt) {
  if (evt.keyCode === 13) {
    $loading.removeClass('is-hidden')
    busca($('#input').val()).then(function () {
      $loading.addClass('is-hidden')
    })
  }
})

var busca = function (texto) {
  return api.search(texto)
  .then(function (photos) {
    var html = photos.map(templatePugPhoto)
    $('#photos').html(html.join(''))
  })
}
