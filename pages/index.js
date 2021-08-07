import Head from 'next/head'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/" />
      </Head>

      <main className="">
        <Header/>
      </main>

    </div>
  )
}
