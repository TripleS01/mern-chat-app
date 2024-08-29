import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BACKEND_URL = import.meta.env.VITE_APP_URL;

export default function useGetConversations() {
    const [loading, setLoading] = useState(false);
    const [conersations, setConersations] = useState([]);

    useEffect(() => {
        async function getConersations() {
            setLoading(true);

            try {
                const response = await fetch(BACKEND_URL + '/users/');

                const usersData = await response.json();
                if (usersData.error) {
                    throw new Error(usersData.error);
                };
                setConersations(usersData);

            } catch (error) {
                toast.error(error.message);


            } finally {
                setLoading(false);

            }

        };

        getConersations();

    }, []);

    return { loading, conersations };

};