import React from 'react'

export default function Conversation() {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-gray-500 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src='https://res.cloudinary.com/practicaldev/image/fetch/s--QHSTQJ0Y--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://robohash.org/mail%40ashallendesign.co.uk'
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>username</p>
                    </div>

                </div>

            </div>

            <div className='divider ml-2 my-0 py-0 h-0.5 bg-gray-400'></div>
        </>


    )
};