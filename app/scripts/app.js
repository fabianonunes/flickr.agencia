import preact from 'preact'

class App extends preact.Component {
  incr () {
    var current = this.state.valor || 0
    this.setState({
      valor: current + 1
    })
  }

  decr () {
    var current = this.state.valor || 0
    this.setState({
      valor: current - 1
    })
  }

  render (props, state) {
    return <div class={state.valor}>
      Olá, {props.nome}!
      <br />
      Você clicou {state.valor} vezes.
      <br />
      <button onClick={this.incr.bind(this)}>+</button>
      <button onClick={this.decr.bind(this)}>-</button>
    </div>
  }
}

export default App
