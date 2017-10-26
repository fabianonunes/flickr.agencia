import preact from 'preact'

import Grid from './components/grid'
import FlickrApi from './lib/flickr-api'

export default class App extends preact.Component {
  constructor (props) {
    super(props)
    this.state = { photos: [] }
    this.api = new FlickrApi(props.key)
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
    var hidden = !this.state.loading ? 'is-hidden' : ''
    return <div>
      <div class={`Loading ${hidden}`} />
      <form onSubmit={this.buscar.bind(this)} class='form-inline' action='javascript:'>
        <div class='input-group'>
          <input class='form-control' onInput={this.handleInput.bind(this)} type='text' />
          <span class='input-group-btn'>
            <button class='btn btn-default' type='button'>Buscar</button>
          </span>
        </div>
      </form>

      <h3>
        Foram encontradas {this.state.photos.length} fotos.
      </h3>

      <Grid photos={state.photos} />
    </div>
  }
}
