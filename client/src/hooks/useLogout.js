import React, { useState } from 'react'
import toast from 'react-hot-toast';

import { useAuthContext } from '../context/AuthContext';

const BACKEND_URL = import.meta.env.VITE_APP_URL;

export default function useLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    async function logout() {
        setLoading(true);

        try {
            const response = await fetch(BACKEND_URL + '/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const userData = await response.json();
            if (userData.error) {
                throw new Error(userData.error);
            };

            localStorage.removeItem('authUser');
            setAuthUser(null);

        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
    
};