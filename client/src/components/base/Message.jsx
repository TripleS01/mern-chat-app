import React from 'react';

import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import extractTime from '../../utils/extractTime';

export default function Message({
    message
}) {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const fromMe = message.receiverId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
    const bubbleColor = fromMe ? 'bg-blue-500' : 'bg-gray-700';
    const formattedTime = extractTime(message.createdAt);

    return (
        <>
            <div className={`chat ${chatClassName}`}>

                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img
                            src={profilePicture}
                            alt="chat avatar"
                        />
                    </div>
                </div>

                <div className={`chat-bubble text-gray-200 pb-2 ${bubbleColor}`}>
                    {message.message}
                </div>
                <div className='chat-footer text-xs flex gap-1 items-center opacity-100 text-gray-200'>
                    {formattedTime}
                </div>

            </div >
        </>
    )
};