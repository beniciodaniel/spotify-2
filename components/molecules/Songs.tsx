import { useRecoilValue } from 'recoil'
import { Song } from '.'
import { playlistState } from '../../recoil/atoms/playlistAtom'

export function Songs() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="flex flex-col space-y-1 px-8 pb-28 text-white">
      {playlist?.tracks.items.map((track, index) => (
        <Song key={track.track.id} track={track} order={index} />
      ))}
    </div>
  )
}
