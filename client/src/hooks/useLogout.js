import { useState } from 'react';
import toast from 'react-hot-toast';

import { useAuthContext } from '../context/AuthContext';

export default function useLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    async function logout() {
        setLoading(true);

        try {
            const response = await fetch('/server/auth/logout', {
                method: 'POST',
                credentials: 'include',
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