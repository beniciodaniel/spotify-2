import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  RewindIcon,
} from '@heroicons/react/solid'

interface Props {
  isPlaying: boolean
  handlePlayPause(): void
}

export function PlayerButtons({ handlePlayPause, isPlaying }: Props) {
  return (
    <div className="flex items-center justify-evenly">
      <SwitchHorizontalIcon className="button" />
      <RewindIcon
        // onClick={() => spotifyApi.skipToPrevious()}} API IS NOT WORKINg
        className="button"
      />

      {isPlaying ? (
        <PauseIcon className="button h-10 w-10" onClick={handlePlayPause} />
      ) : (
        <PlayIcon className="button h-10 w-10" onClick={handlePlayPause} />
      )}

      <FastForwardIcon
        // onClick={() => spotifyApi.skipToNext()}} API IS NOT WORKINg
        className="button"
      />
      <ReplyIcon className="button" />
    </div>
  )
}
