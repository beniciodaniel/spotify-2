import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState } from '../recoil/atoms/songAtom'
import { useSpotify } from './useSpotify'

export function useSongInfo() {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [songInfo, setSongInfo] = useState<SpotifyApi.TrackObjectFull>(
    {} as SpotifyApi.TrackObjectFull
  )

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        try {
          const trackInfo = await fetch(
            `https://api.spotify.com/v1/tracks/${currentTrackId}`,
            {
              headers: {
                Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
              },
            }
          ).then((response) => response.json())

          setSongInfo(trackInfo)
        } catch (error) {
          console.log(error, 'ERROR in fetchSongInfo')
        }
      }
    }

    fetchSongInfo()
  }, [spotifyApi, currentTrackId])

  return songInfo
}
