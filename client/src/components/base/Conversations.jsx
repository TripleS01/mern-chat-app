import React from 'react'

import Conversation from './Conversation'

import useGetConversations from '../../hooks/useGetConversations';

export default function Conversations() {
    const { loading, conversations } = useGetConversations();

    return (
        <>
            <div className='py-2 flex flex-col overflow-auto'>

                {conversations.map((conversation, last) => {
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        lastConversation={last === conversation.length - 1}
                    />
                })}

                {loading ?
                    <span className='loading loading-spinner'></span>
                    :
                    null
                }

            </div>
        </>
    )
};