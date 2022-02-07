import Head from 'next/head'
import { Center, Sidebar } from '../components/organisms'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
