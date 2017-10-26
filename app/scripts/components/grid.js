import preact from 'preact'

class Grid extends preact.Component {
  render ({ photos }) {
    return <div class='Grid'>{photos.map(Card)}</div>
  }
}

const Card = function (photo) {
  return <div class='Card'>
    <img class='img-responsive' src={photo.url_n} />
    <div class='Card-caption'>{photo.description._content.split(/[\n.]/)[0]}</div>
  </div>
}

export default Grid
