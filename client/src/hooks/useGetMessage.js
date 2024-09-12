import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import useConversation from '../store/useConversation'

export default function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {

        async function getMessage() {
            setLoading(true);

            try {
                const response = await fetch(`/server/messages/${selectedConversation._id}`);

                const messageData = await response.json();
                if (messageData.error) {
                    throw new Error(messageData.error);
                }

                setMessages(messageData);

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);

            }
        };

        if (selectedConversation?._id) {
            getMessage();
        }

    }, [selectedConversation?._id, setMessages]);

    return { loading, messages };
};