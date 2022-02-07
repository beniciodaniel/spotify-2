import { InfoHeader, UserMenu } from '../molecules'

export function Center() {
  return (
    <div className="flex-grow">
      <UserMenu className="absolute top-5 right-8" />
      <InfoHeader />
    </div>
  )
}
