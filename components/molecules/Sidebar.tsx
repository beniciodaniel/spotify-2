import { signOut, useSession } from 'next-auth/react'
import { SidebarButton } from './SidebarButton'

function Sidebar() {
  const { data: session, status } = useSession()

  console.log(session)

  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
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
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
        <p className="cursor-pointer hover:text-white">Playlist name... </p>
      </div>
    </div>
  )
}

export default Sidebar
