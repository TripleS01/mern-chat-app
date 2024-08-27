import React from 'react'
import Conversation from './Conversation'

export default function ConversationSidebar() {
    return (
        <>
            <div className='py-2 flex flex-col overflow-auto'>

                <Conversation />
                <Conversation />

            </div>
        </>
    )
};