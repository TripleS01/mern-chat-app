import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

import useConversation from '../store/useConversation'

const BACKEND_URL = import.meta.env.VITE_APP_URL;

export default function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {

        async function getMessage() {
            setLoading(true);

            try {
                const response = await fetch(BACKEND_URL + `/messages/get/:${selectedConversation._id}`);

                const messageData = response.json();
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