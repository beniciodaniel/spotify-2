import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'

interface Props {
  text: string
  type:
    | 'HomeIcon'
    | 'SearchIcon'
    | 'PlusCircleIcon'
    | 'HeartIcon'
    | 'RssIcon'
    | 'LibraryIcon'
}

export function SidebarButton({ text, type }: Props) {
  const IconType = {
    HomeIcon: <HomeIcon className="h-5 w-5" />,
    SearchIcon: <SearchIcon className="h-5 w-5" />,
    LibraryIcon: <LibraryIcon className="h-5 w-5" />,
    PlusCircleIcon: <PlusCircleIcon className="h-5 w-5" />,
    HeartIcon: <HeartIcon className="h-5 w-5 text-blue-500" />,
    RssIcon: <RssIcon className="h-5 w-5 text-green-500" />,
  }

  return (
    <button className={`flex items-center space-x-2 hover:text-white`}>
      {IconType[type]}
      <p>{text}</p>
    </button>
  )
}
