import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { useSpotify } from '../../hooks/useSpotify'

import { playlistState, playlistIdState } from '../../recoil/atoms/playlistAtom'
import { useRecoilState, useRecoilValue } from 'recoil'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]

export function InfoHeader() {
  const spotifyApi = useSpotify()
  const [color, setColor] = useState('')
  const [playlist, setPlaylist] = useRecoilState(playlistState)
  const playlistId = useRecoilValue(playlistIdState)

  useEffect(() => {
    const shuffledColor = shuffle(colors).pop()
    if (shuffledColor) return setColor(shuffledColor)
    setColor(colors[0])
  }, [playlistId])

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('Something went wrong', err))
  }, [spotifyApi, playlistId])

  return (
    <section
      className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
    >
      <img
        src={playlist?.images?.[0]?.url}
        className="h-44 w-44 shadow-2xl"
        alt=""
      />
      <div>
        <p>Playlist</p>
        <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
          {playlist?.name}
        </h1>
      </div>
    </section>
  )
}
