import toast from 'react-hot-toast';

import useConversation from '../store/useConversation';

export default function useSendMessage() {
    const { messages, setMessages, selectedConversation } = useConversation();

    async function sendMessage(message) {

        try {
            const response = await fetch(`/server/messages/${selectedConversation._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });

            const messageData = await response.json();
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