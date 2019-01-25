export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}

export const SET_ALBUM = 'SET_ALBUM'

export function setAlbums(album) {
  return {
    type: SET_ALBUM,
    payload: album
  }
}