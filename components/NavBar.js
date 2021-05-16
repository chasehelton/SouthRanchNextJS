import React, {useState} from 'react'
import Link from 'next/link'

export default function NavBar() {
    const [active, setActive] = useState(false);

    const displayNav = () => setActive(!active);

    return (
        // <div className='relative top-0 left-0 z-9999 w-screen flex items-center flex-wrap bg-gradient-to-br from-blue-600 to-blue-700 p-3'>
        <div className='relative top-0 left-0 z-9999 w-screen flex items-center flex-wrap bg-white p-1'>
            <Link href='#home'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <img src="/srlogo3.png" alt="logo" width="120" height="120"/>
                </a>
            </Link>
            <button
                className='inline-flex p-3 hover:bg-blue-400 rounded lg:hidden text-blue-700 ml-auto hover:text-blue-700 outline-none'
                onClick={displayNav}
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
            <div className={`${active ? '' : 'hidden'} z-9999 w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                    <Link href='#services'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue-700 font-bold items-center justify-center hover:bg-blue-400 hover:text-blue-700'>
                            Services
                        </a>
                    </Link>
                    <Link href='#about' scroll={true}>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue-700 font-bold items-center justify-center hover:bg-blue-400 hover:text-blue-700'>
                            About us
                        </a>
                    </Link>
                    <Link href='#contact'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue-700 font-bold items-center justify-center hover:bg-blue-400 hover:text-blue-700'>
                            Contact us
                        </a>
                    </Link>
                </div>
            </div>
      </div>
    )
}
