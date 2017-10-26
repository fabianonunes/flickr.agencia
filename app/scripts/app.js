import preact from 'preact'

import Grid from './components/grid'
import FlickrApi from './lib/flickr-api'

export default class App extends preact.Component {
  constructor () {
    super()
    this.state = { photos: [] }
    this.api = new FlickrApi('026d26f0c2e252ec152c416857ecd75c')
  }

  handleInput (evt) {
    this.setState({
      texto: evt.target.value
    })
  }

  async buscar () {
    this.setState({ loading: true })
    var photos = await this.api.search(this.state.texto)
    this.setState({ loading: false })
    this.setState({ photos })
  }

  render (props, state) {
    return <div>
      { this.state.loading ? <div class='Loading' /> : null }
      <form onSubmit={this.buscar.bind(this)} action='javascript:'>
        <input onInput={this.handleInput.bind(this)} type='text' />
        <button>Buscar</button>
      </form>
      <h3>
        Foram encontradas {this.state.photos.length} fotos.
      </h3>
      <Grid photos={state.photos} />
    </div>
  }
}
