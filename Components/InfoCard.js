import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid"
function InfoCard({ description, img, location, star, lat, long, title, total, price }) {
    return (
        <div className=" cmb-2  grid sm:grid-cols-2 sm:grid-col-2 md:grid-cols-4 px-5 py-5 hover:shadow-2xl">
            <title>Search</title>
            <div className="relative  h-44  md:h-56 lg:h-64	sm:col-span-1 ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <div className="flex flex-grow flex-col pr-10 pl-4 p-4 sm:col-start-2 sm:col-end-3 md:col-start-2 md:col-end-5">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-600" >{location}</p>
                    <HeartIcon className="h-6 cursor-pointer"  />
                </div>
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">{title}</h1>
                        <p className="text-sm text-gray-800 flex-wrap">{description}</p>
                    </div>
                    <div className="flex flex-grow items-end justify-between">
                        <div className="flex items-center  cursor-pointer  hover:scale-125 transform transition duration-105">
                            <StarIcon className="h-6 text-red-500" />
                            <p className="font-medium">{star}</p>
                        </div>
                        <div className="flex flex-col  justify-between cursor-pointer">
                          <h1 className="font-bold">{price}</h1>
                          <p >{total}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
