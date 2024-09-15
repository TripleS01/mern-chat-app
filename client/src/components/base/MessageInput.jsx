import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

import useSendMessage from '../../hooks/useSendMessage';
import sendMessageSound from '../assets/sounds/sendMessage.mp3'

export default function MessageInput() {
    const [message, setMessage] = useState('');
    const { sendMessage } = useSendMessage();

    async function onSendMessage(event) {
        event.preventDefault();
        if (!message) {
            return;
        }

        const sound = new Audio(sendMessageSound);
        sound.play();

        await sendMessage(message);
        setMessage('');
    };

    return (
        <>
            <form
                onSubmit={onSendMessage}

                className='px-4 my-3'
            >
                <div className='w-full relative'>
                    <input
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}

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