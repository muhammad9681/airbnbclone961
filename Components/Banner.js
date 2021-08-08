import bannerback from '../Images/bannerback.webp'
import Image from 'next/image';
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] l:h-[600px] xl:h-[700px] ">
         <Image
               src={bannerback}
               layout='fill'
               objectFit="cover"

               />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm md:text-xl font-bolder">
                Not Sure where to go,Perfect
            </p>
            <button className="text-purple-500 bg-white rounded-full px-5 py-2.5 md:px-10 md:py-5 shadow-md my-4 font-bold hover:shadow-xl active:scale-90 transition duration-200">
                I'm flexible
            </button>
        </div>
        
        </div>
    )
}

export default Banner;
