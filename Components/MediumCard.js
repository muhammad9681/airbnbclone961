import Image from 'next/image';
function MediumCard({img, title}) {
    return (
        <div>
            <div className="relative h-52 w-52 md:h-44 md:w-44	 m-5 cursor-pointer hover:scale-105 transition transform-600 ease-in">
                <Image
                    src={img} layout='fill'
                    className="rounded-xl" />
            </div>
            <h1 className="sm:text-md pl-6">{title}</h1>
        </div>
       
    )
}

export default MediumCard
