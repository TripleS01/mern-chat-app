import React from 'react';

import useGetSearchConversations from '../../hooks/useGetSearchConversations';

import Conversation from './Conversation';

export default function Conversations({
    searchQuery
}) {
    const { loading, conversations } = useGetSearchConversations(searchQuery);

    return (
        <>
            <div className='py-2 flex flex-col overflow-auto'>

                {conversations.map((conversation, last) => (
                    < Conversation
                        key={conversation._id}
                        conversation={conversation}
                        lastConversation={last === conversation.length - 1}
                    />
                ))}

                {loading ?
                    <span className='loading loading-spinner'></span>
                    :
                    null
                }

            </div>
        </>
    )
};