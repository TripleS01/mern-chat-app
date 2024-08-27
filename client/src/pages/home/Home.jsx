import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function Home() {
    return (
        <>
            <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden
         bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
                <Sidebar />
            </div>
        </>
    )
};