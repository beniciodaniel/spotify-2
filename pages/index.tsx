import Head from 'next/head'
import Sidebar from '../components/molecules/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
