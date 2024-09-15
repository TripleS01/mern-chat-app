import React from 'react';

import useConversation from '../../store/useConversation';
import useSocketContext from '../../context/SocketContext';

export default function Conversation({
    conversation,
    lastConversation
}) {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.include(conversation._id);

    return (
        <>
            <div
                onClick={() => setSelectedConversation(conversation)}

                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                ${isSelected ? 'bg-sky-500' : ''}
            `}>
                <div className={`avatar ${isOnline ? 'online' : ''} `}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePicture}
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>
                            {conversation.username}
                        </p>
                    </div>

                </div>

            </div >

            {!lastConversation && (
                < div className='divider ml-2 my-0 py-0 h-0.5 bg-gray-400'></div >
            )}

        </>
    )
};