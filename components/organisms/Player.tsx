import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useSongInfo } from '../../hooks/useSongInfo'
import { useSpotify } from '../../hooks/useSpotify'
import {
  currentTrackIdState,
  isPlayingState,
} from '../../recoil/atoms/songAtom'

export function Player() {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volue, setVolume] = useState(50)

  const songInfo = useSongInfo()

  const fetchCurrentSong = () => {
    if (Object.keys(songInfo).length === 0) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log('Now playing: ', data.body?.item?.name)
        setCurrentTrackId(String(data.body?.item?.id))

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    }
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentTrackId, spotifyApi, session])

  return (
    <div className="grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-sm text-white md:px-8 md:text-base">
      {/* Lado esquerdo */}
      <div className="flex items-center space-x-4">
        <img
          className="hidden h-10 w-10 md:inline"
          src={songInfo?.album?.images?.[0]?.url}
          alt="Album cover"
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      {/* Centro */}
      <div>{/* <SwitchHorizontalIcon className="h-5 w-5" /> */}</div>
    </div>
  )
}
