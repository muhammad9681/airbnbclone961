import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/" />
      </Head>
      <Header/>
      <Banner/>
    </div>
  )
}
