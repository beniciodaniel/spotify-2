import { InfoHeader, Songs, UserMenu } from '../molecules'

export function Center() {
  return (
    <div className="h-screen flex-grow overflow-y-scroll scrollbar-hide">
      <UserMenu className="absolute top-5 right-8" />
      <InfoHeader />
      <Songs />
    </div>
  )
}
