import React from 'react';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default function NoChat() {
    return (
        <>
            <div className='flex items-center justify-center w-full h-full'>

                <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>

                    <p>Welcome back, username!</p>
                    <p className='flex items-center gap-1'>
                        Select a chat to start messaging
                        <HiOutlineChatBubbleLeftRight className='text-3xl md:text-3xl' />
                    </p>

                </div>

            </div>
        </>
    )
};