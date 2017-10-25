class FlickrApi {

  constructor (api_key) {
    this.api_key = api_key
  }

  search (text) {
    return $.get({
      url: 'https://api.flickr.com/services/rest',
      data: {
        api_key: this.api_key,
        method: 'flickr.photos.search',
        user_id: '49143546@N06',
        per_page: '100',
        extras: 'url_n,o_dims,description',
        format: 'json',
        text: text
      }
    })
    .then(function (responseText) {
      var r = eval(responseText)
      return r ? r.photos.photo : []
    })
  }
}

var jsonFlickrApi = function (data) {
  return data
}

module.exports = FlickrApi
