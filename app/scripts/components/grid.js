import preact from 'preact'

var Grid = function (props) {
  return <div class='Grid'>
    {props.photos.map(Card)}
  </div>
}

var Card = function (props) {
  return <div class='Card'>
    <img src={props.url_n} />
    <div class='Card-caption'>
      {props.description._content.split(/[\n.]/)[0]}
    </div>
  </div>
}

export default Grid
