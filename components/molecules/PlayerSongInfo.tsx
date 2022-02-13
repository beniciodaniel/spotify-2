interface Props {
  songInfo: SpotifyApi.TrackObjectFull
}

export function PlayerSongInfo({ songInfo }: Props) {
  return (
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
  )
}
