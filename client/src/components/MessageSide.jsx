import React, { useEffect } from 'react';

import useConversation from '../store/useConversation';

import Messages from './base/Messages';
import MessageInput from './base/MessageInput';
import NoChat from './base/NoChat';

export default function MessageSide() {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);

    }, [setSelectedConversation]);

    return (
        <>
            <div className='md:min-w-[650px] flex flex-col'>

                {selectedConversation ? (
                    <>
                        <div className='px-4 py-2 flex items-center mb-2 '>
                            <div >
                                <img
                                    className='w-10 rounded-full mr-2'
                                    src={selectedConversation.profilePicture}
                                    alt="chat avatar"
                                />
                            </div>

                            <span className='label-text text-gray-200 text-base font-bold'>
                                {selectedConversation.username}
                            </span>
                        </div >

                        <div className='divider mr-2 my-0 py-0 h-0.5 bg-gray-300'></div>

                        <Messages />

                        <MessageInput />
                    </>
                ) : (
                    <NoChat />
                )}

            </div >
        </>
    )
};