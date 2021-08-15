import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, UsersIcon,MenuIcon, UserCircleIcon, XIcon } from '@heroicons/react/solid'
import logo from '../Images/Airbnb.png'
import { useState, useRef } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
function Header() {
    const [searchInput, setsearchInput] = useState("");
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [searchinputvalue,setsearchinputvalue] = useState("");
    const noofUser=useRef(1)
    const handlechange = (ranges) => {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }
    const handleXclickinput=()=>{
        console.log("Inside X Click function.")
        searchinputvalue=""
    }
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }
    return (
        <header className="sticky z-50 items-center top-0 p-5 grid grid-cols-3 bg-white shadow-md  px-3 sm:px-5 md:px-10">
            {/* Left--Logo */}
            <div className="relative flex items-center h-10  cursor-pointer my-auto">
                <Image
                    src={logo}
                    layout='fill'
                    objectFit="contain" objectPosition="left" />
            </div>
            {/* Middle --Search */}
            <div className="flex items-center border-2 rounded-full pl-2 md:shadow-sm ">
                <input onChange={(event) => setsearchInput(event.target.value)} placeholder="Start your search" className=" flex-grow outline-none bg-transparent text-xs	sm:text-sm text-gray-400 placeholder-gray-300"></input>
               {searchInput ?<XIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer m-1 active:scale-50 transition duration-175" /> 
               :<SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer m-1 active:scale-50 transition duration-175"/>} 
            </div>
            {/* Right --Menu. */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline-flex h-6 cursor-pointer" >Become a member</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center border-2 rounded-full p-1 space-x-2 px-2">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="hidden sm:flex h-6 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col mx-auto col-span-full	">{searchInput &&
                <div>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handlechange} />
                 <div className="flex flex-row justify-center">
                     <h2 className="text-2xl text-semibold flex-grow">Number of Guests</h2>
                     <input className="w-12 outline-none pl-2 text-red-500" min="1" ref={noofUser} type="number" step="1"/>
                     <UsersIcon className=" flex justify-center my-auto h-6"/>
                 </div>
                </div>
            }
            </div>

        </header>
    )
}
export default Header
