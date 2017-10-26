import preact from 'preact'
import Grid from './components/grid'
import FlickrApi from './lib/flickr-api'

class App extends preact.Component {
  constructor () {
    super()
    this.api = new FlickrApi('026d26f0c2e252ec152c416857ecd75c')
  }

  handleInput (e) {
    this.setState({ text: e.target.value })
  }

  async search (evt) {
    this.setState({ loading: true })
    let photos = await this.api.search(this.state.text)
    this.setState({ loading: false })
    this.setState({ photos })
  }

  render (props, state) {
    return (
      <div>
        { state.loading ? <div class='Loading' /> : null }
        <form class='form-inline' onSubmit={this.search.bind(this)} action='javascript:'>
          <div class='input-group'>
            <input type='text' onInput={this.handleInput.bind(this)} class='form-control' />
            <span class='input-group-btn'>
              <button class='btn btn-default' type='submit'>Buscar</button>
            </span>
          </div>
        </form>
        <Grid photos={state.photos || []} />
      </div>
    )
  }
}

export default App
