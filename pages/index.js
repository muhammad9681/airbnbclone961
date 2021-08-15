import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import MediumCard from '../Components/MediumCard'
import SmallCard from '../Components/SmallCard'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'
export default function Home({exploseData,cardData}) {
  return (
    <div className="">
      <Head >
        <title>Airbnb Clone</title>
        <link rel="icon" href="/" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploseData?.map(item=>
                <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}/>
          )}
          </div>
        </section>
        <section className="  pt-6">
            <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
            <div className='grid sm:grid-cols-2 md:flex md:flex-wrap md:justify-center space-x-1 '>
            {cardData?.map((item)=>
              <MediumCard
              key={item.img}
              img={item.img}
              title={item.title} />)}
            </div>
        </section> 
        <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttontext="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploseData=await fetch('https://links.papareact.com/pyp')
  .then(
    (res)=>res.json()
    
  )
  const cardData=await fetch("https://links.papareact.com/zp1").
  then(res=>res.json())
  return{
    props:{
      exploseData,
      cardData,
}
}
}