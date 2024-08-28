import React from 'react'

import { IoIosSend } from "react-icons/io";

export default function MessageInput() {
    return (
        <>
            <form className='px-4 my-3'>
                <div className='w-full relative'>
                    <input
                        className='border text-sm rounded-xl w-full p-2.5 
                         bg-gray-200 placeholder-gray-400 text-gray-800'
                        type="text"
                        placeholder='Message...'
                    />

                    <button
                        className='absolute inset-y-0 end-0 flex items-center pe-3'
                        type='submit'
                    >
                        <IoIosSend className='w-6 h-6' />
                    </button>
                </div>
            </form>
        </>
    )
};