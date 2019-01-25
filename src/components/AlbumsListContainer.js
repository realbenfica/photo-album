import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/albums'

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.body.map(album => {
          this.props.addAlbum(album.id, album.title)
      }))

      this.props.addAlbum(1, "Loving it")
  }

  render() {
    if (!this.props.addAlbum) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = state => {
    return {
      albums: state.albums
    }
  }
  


export default connect(mapStateToProps, { helloWorld, addAlbum })(AlbumsListContainer)