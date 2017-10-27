import jsonp from 'jsonp'
import qs from 'query-string'

class FlickrApi {
  constructor (apiKey) {
    this.defaults = {
      user_id: '49143546@N06',
      per_page: '100',
      extras: 'url_n,o_dims,description',
      format: 'json',
      api_key: apiKey
    }
  }

  search (text) {
    return this.call({ method: 'flickr.photos.search', text })
  }

  call (opts) {
    return new Promise((resolve, reject) => {
      const query = qs.stringify(Object.assign({}, opts, this.defaults))
      jsonp(
        'https://api.flickr.com/services/rest?' + query,
        { param: 'jsoncallback' },
        (err, data) => err ? reject(err) : resolve(data.photos.photo)
      )
    })
  }
}

export default FlickrApi
