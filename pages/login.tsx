import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'

interface Provider {
  id: string
  name: string
  signinUrl: string
  callbackUrl: string
}
interface Props {
  providers: Provider[]
}

function Login({ providers }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img
        className="mb-5 w-52"
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
        alt="Spotify Logo"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()

  console.log(providers)

  return {
    props: {
      providers,
    },
  }
}

export default Login
