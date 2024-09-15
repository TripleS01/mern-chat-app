import React, { useEffect, useRef } from 'react'

import Message from './Message'
import MessageSkelet from '../../skelets/MessageSkelet';

import useGetMessage from '../../hooks/useGetMessage';
import useConversation from '../../store/useConversation';
import useIncomingSocketMessage from '../../hooks/useListenMessage';

export default function Messages() {
    const { selectedConversation } = useConversation();
    const { loading, messages } = useGetMessage();
    const lastMessageRef = useRef();
    useIncomingSocketMessage();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);

    }, [messages]);

    return (
        <>
            <div className='px-4 flex-1 overflow-auto'>

                {!loading && messages.length > 0 && messages.map((message) => (
                    < div
                        key={message._id}
                        ref={lastMessageRef}
                    >
                        <Message
                            message={message}
                        />

                    </div>
                ))}

                {loading &&
                    [...Array(3)].map((_, index) =>
                        <MessageSkelet
                            key={index}
                        />
                    )}

                {!loading && messages.length === 0 && (
                    <p className='text-center text-gray-300 mt-3'>
                        Send a message to start the
                        <br></br>
                        conversation with {selectedConversation.username}
                    </p>
                )}

            </div >
        </>
    )
};