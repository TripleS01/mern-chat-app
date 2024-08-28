import React from 'react'
import SidebarSide from '../../components/SidebarSide'
import MessageSide from '../../components/MessageSide'

export default function Home() {
    return (
        <>
            <div className='flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden
         bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>

                <SidebarSide />
                <MessageSide />

            </div>
        </>
    )
};