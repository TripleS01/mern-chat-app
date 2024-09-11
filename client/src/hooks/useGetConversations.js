import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function useGetConversations() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        async function getConversations() {
            setLoading(true);

            try {
                const response = await fetch('/server/users');

                const usersData = await response.json();
                if (usersData.error) {
                    throw new Error(usersData.error);
                };
                setConversations(usersData);

            } catch (error) {
                toast.error(error.message);

            } finally {
                setLoading(false);
            }
        };

        getConversations();

    }, []);

    return { loading, conversations };
};