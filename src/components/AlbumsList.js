import * as React from 'react'

export default function AlbumsList(props) {
    console.log(props.album)
  return (<div>
    <h1>All Albums</h1>
    There are { props.albums.length } albums available.
    <ul>
    { props.albums.map(album => <li key={album.id} > { album.title } </li>) }

    {/* { <li key={props.albums.id} > { props.albums.title } </li> } */}
    </ul>
    
  </div>)
}

