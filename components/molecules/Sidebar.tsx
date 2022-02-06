import { SidebarButton } from './SidebarButton'

function Sidebar() {
  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <SidebarButton text="Home" type="HomeIcon" />
        <SidebarButton text="Search" type="SearchIcon" />
        <SidebarButton text="Your Library" type="LibraryIcon" />

        <hr className="border-t-[0.1px] border-gray-900" />

        <SidebarButton text="Create Playlist" type="PlusCircleIcon" />
        <SidebarButton text="Liked Songs" type="HeartIcon" />
        <SidebarButton text="Your Episodes" type="RssIcon" />

        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  )
}

export default Sidebar
