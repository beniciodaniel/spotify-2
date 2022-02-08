import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useSpotify } from '../../hooks/useSpotify'
import { SidebarButton } from '../molecules'

export function Sidebar() {
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([])
  const spotifyApi = useSpotify()

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getUserPlaylists()
        .then((data) => setPlaylists(data.body.items))
    }
  }, [session, spotifyApi])

  console.log(session)
  console.log(playlists)

  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 p-5 text-sm text-gray-500 scrollbar-hide">
      <button onClick={() => signOut()}>LOGOUT</button>
      <div className="space-y-4">
        <SidebarButton text="Home" type="HomeIcon" />
        <SidebarButton text="Search" type="SearchIcon" />
        <SidebarButton text="Your Library" type="LibraryIcon" />

        <hr className="border-t-[0.1px] border-gray-900" />

        <SidebarButton text="Create Playlist" type="PlusCircleIcon" />
        <SidebarButton text="Liked Songs" type="HeartIcon" />
        <SidebarButton text="Your Episodes" type="RssIcon" />

        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist */}
        {playlists.map((playlist) => (
          <p key={playlist.id} className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}
