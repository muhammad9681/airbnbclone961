import Header from "../Components/Header";
import Footer from '../Components/Footer';
import { useRouter } from 'next/router';
import format from "date-fns/format";
import InfoCard from "../Components/InfoCard";
import Map from "../Components/Map";
function Search({ SearchResults }) {
    console.log(SearchResults)
    const router = useRouter();
    const { location, startDate, endDate, noofGuest } = router.query;
    const formatedstartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedendDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatedstartDate}| ${formatedendDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noofGuest}`} />
            <title>Search</title>
            <main className="lg:grid lg:grid-cols-6">
                <div className="lg:col-span-4">
                <section className="flex-grow pt-14 px-6">
                    <p className='text-xs'>300+ Stays between {range} in {location} for {noofGuest} Guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden sm:flex space-x-2 pb-5">
                        <p className="button">Cancellation Fexiblity</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filter</p>
                    </div>
                </section>
                <section className=" mx-2.5 md:mx-10">
                   { SearchResults.map(( {description,img,location,star,lat,long,title,total,price}) => (
                       <InfoCard 
                       key={img}
                       img={img}
                       description={description}
                       location={location}
                       star={star}
                       lat={lat}
                       long={long}
                       title={title}
                       total={total}
                       price={price} />
    ))
                   }
                </section>
                </div>
                <section className="lg:col-span-2">
                    <Map SearchResults={SearchResults}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;
export async function getServerSideProps(){
 const SearchResults=await fetch("https://links.papareact.com/isz")
 .then((res)=>res.json());
 return{
     props:{
         SearchResults,
     }
 }
}
