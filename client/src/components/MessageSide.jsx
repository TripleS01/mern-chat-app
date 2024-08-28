import React from 'react'

import Message from './base/Message'
import MessageInput from './base/MessageInput'
import NoChat from './base/NoChat';

export default function MessageSide() {
    const noChat = true;

    return (
        <>
            <div className='md:min-w-[650px] flex flex-col'>

                {noChat ? (
                    <NoChat />

                ) : (

                    <>
                        <div className='px-4 py-2 flex items-center mb-2 '>
                            <div className='w-10 rounded-full mr-2'>
                                <img
                                    src="https://robohash.org/afasfasf"
                                    alt="chat avatar"
                                />
                            </div>

                            <span className='label-text text-gray-200 text-base'>
                                username
                            </span>
                        </div >

                        <div className='divider mr-2 my-0 py-0 h-0.5 bg-gray-300'></div>

                        <Message />
                        <MessageInput />
                    </>
                )}

            </div >
        </>
    )
};