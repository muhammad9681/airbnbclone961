import Image from 'next/image';
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon} from '@heroicons/react/solid'
import logo from '../Images/Airbnb.png'
function Header() {
    return (
       <header className="sticky z-50 items-center top-0 p-5 grid grid-cols-3 bg-white shadow-md  px-3 sm:px-5 md:px-10">
           {/* Left--Logo */}
           <div className="relative flex items-center h-10  cursor-pointer my-auto">
               <Image
               src={logo} 
                layout='fill'
                objectFit="contain" objectPosition="left"/>
           </div>
           {/* Middle --Search */}
           <div className="flex items-center border-2 rounded-full pl-2 md:shadow-sm ">
               <input placeholder="Start your search" className=" flex-grow outline-none bg-transparent text-xs	sm:text-sm text-gray-400 placeholder-gray-300"></input>
               <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer m-1"/>
           </div>
           {/* Right --Menu. */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline-flex h-6 cursor-pointer" >Become a member</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center border-2 rounded-full p-1 space-x-2 px-2">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="hidden sm:flex h-6 cursor-pointer"/>
                </div>
            </div>
       </header>
    )
}
export default Header
