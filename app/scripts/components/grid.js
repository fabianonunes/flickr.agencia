import preact from 'preact'

var Grid = props => (
  <div class='Grid'>
    {props.photos.map(Card)}
  </div>
)

var Card = props => (
  <div class='Card'>
    <img src={props.url_n} />
    <div class='Card-caption'>
      {props.description._content.split(/[\n.]/)[0]}
    </div>
  </div>
)

export default Grid
