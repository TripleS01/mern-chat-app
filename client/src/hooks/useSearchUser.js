import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function useSearch() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        async function search(search) {
            setLoading(true);

            try {
                const response = await fetch(`/server/users?search=${search}`);

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

        search();

    }, []);

    return { loading, conversations };
};