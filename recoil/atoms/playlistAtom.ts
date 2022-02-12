import { atom } from 'recoil'

export const playlistState = atom<SpotifyApi.PlaylistObjectFull>({
  key: 'playlistState',
  default: {} as SpotifyApi.PlaylistObjectFull,
})

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '5ez1FQYj8NIi5ybHGMm6CX',
})
