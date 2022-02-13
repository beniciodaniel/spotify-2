import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useSongInfo } from '../../hooks/useSongInfo'
import { useSpotify } from '../../hooks/useSpotify'
import {
  currentTrackIdState,
  isPlayingState,
} from '../../recoil/atoms/songAtom'
import { PlayerButtons, PlayerSongInfo, Volume } from '../molecules'

export function Player() {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()

  const fetchCurrentSong = () => {
    if (Object.keys(songInfo).length === 0) {
      spotifyApi
        .getMyCurrentPlayingTrack()
        .then((data) => {
          console.log('Now playing: ', data.body?.item?.name)
          setCurrentTrackId(String(data.body?.item?.id))

          spotifyApi
            .getMyCurrentPlaybackState()
            .then((data) => {
              setIsPlaying(data.body?.is_playing)
            })
            .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error))
    }
  }

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause()
        setIsPlaying(false)
      } else {
        spotifyApi.play().catch((err) => {})
        setIsPlaying(true)
      }
    })
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentTrackId, spotifyApi, session])

  return (
    <div className="grid h-24 grid-cols-3 bg-gradient-to-b from-black to-gray-900 px-2 text-sm text-white md:px-8 md:text-base">
      <PlayerSongInfo songInfo={songInfo} />

      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} />

      <div className="pr-5">
        <Volume volume={volume} setVolume={setVolume} />
      </div>
    </div>
  )
}
