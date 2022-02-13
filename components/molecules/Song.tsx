import { useRecoilState } from 'recoil'
import { useSpotify } from '../../hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../../lib/time'
import {
  currentTrackIdState,
  isPlayingState,
} from '../../recoil/atoms/songAtom'

interface Props {
  order: number
  track: SpotifyApi.TrackObjectFull
}

export function Song({ order, track }: Props) {
  const spotifyApi = useSpotify()

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = () => {
    setCurrentTrackId(track.id)
    setIsPlaying(true)

    spotifyApi
      .play({
        uris: [track.uri],
      })
      .catch((err) => {
        console.log(err, '-> playSong')
      })
  }

  return (
    <div
      className="grid cursor-pointer grid-cols-2 rounded-lg py-4 px-5 text-gray-500 hover:bg-gray-900"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.album.images[0].url}
          alt="Album name"
        />
        <div>
          <p className="w-36 truncate text-white lg:w-64">{track.name}</p>
          <p className="w-40">{track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:inline">{track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  )
}
