import preact from 'preact'

class App extends preact.Component {
  constructor () {
    super()
    this.state = {
      tarefas: []
    }
  }

  addTodo () {
    this.setState({
      tarefas: this.state.tarefas.concat([this.state.texto])
    })
  }

  handleInput (evt) {
    this.setState({
      texto: evt.target.value
    })
  }

  render (props, state) {
    return <div class={state.valor}>
      <input onInput={this.handleInput.bind(this)} type='text' />
      <button onClick={this.addTodo.bind(this)}>+</button>
      <Lista itens={state.tarefas || []} />
    </div>
  }
}

const Lista = function (props) {
  return <ul>
    { props.itens.map(item => <li>{item}</li>) }
  </ul>
}

export default App
