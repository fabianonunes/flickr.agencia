import preact from 'preact'

var App = function (props) {
  return <div>Olá, {props.nome}!</div>
}

preact.render(
  <App nome='Mundo' />,
  document.getElementById('app')
)
