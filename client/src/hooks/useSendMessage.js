import toast from 'react-hot-toast';

import useConversation from '../store/useConversation';

const BACKEND_URL = import.meta.env.VITE_APP_URL;


export default function useSendMessage() {
    const { messages, setMessages, selectedConversation } = useConversation();

    async function sendMessage(message) {

        try {
            const response = await fetch(BACKEND_URL + `/messages/send/:${selectedConversation._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });

            const messageData = response.json();
            if (messageData.error) {
                throw new Error(messageData.error);
            }

            setMessages([...messages, messageData]);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return { sendMessage };
};