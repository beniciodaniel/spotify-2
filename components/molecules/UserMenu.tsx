import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

interface Props {
  className: string
}

export function UserMenu({ className }: Props) {
  const { data: session } = useSession()

  return (
    <header className={className}>
      <div className="flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2 text-white opacity-90 hover:opacity-80">
        <img
          className="h-10 w-10 rounded-full"
          src={
            session?.user?.image ??
            'https://i.pinimg.com/236x/a5/7f/ce/a57fce63b8f43536888ffef4a642ff18--anime-life-slam-dunk.jpg'
          }
          alt="Image"
        />
        <h2>{session?.user?.name}</h2>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </header>
  )
}
