import { VolumeUpIcon as VolumeDownIcon } from '@heroicons/react/outline'
import { VolumeUpIcon } from '@heroicons/react/solid'
import { debounce } from 'lodash'
import { useCallback, useEffect } from 'react'
import { useSpotify } from '../../hooks/useSpotify'

interface Props {
  volume: number
  setVolume(volume: number): void
}

export function Volume({ volume, setVolume }: Props) {
  const spotifyApi = useSpotify()

  const debouncedAjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => console.log(err))
    }, 600),
    []
  )

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAjustVolume(volume)
    }
  }, [volume])

  return (
    <div className="flex h-full items-center justify-end space-x-3 md:space-x-4">
      <VolumeDownIcon
        onClick={() => volume > 0 && setVolume(volume - 10)}
        className="button"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
        className="w-14 md:w-28"
      />
      <VolumeUpIcon
        onClick={() => volume < 100 && setVolume(volume + 10)}
        className="button"
      />
    </div>
  )
}
