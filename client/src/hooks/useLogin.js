import { useState } from 'react';
import toast from 'react-hot-toast';

import { useAuthContext } from '../context/AuthContext';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    async function login(username, password) {
        const success = handleInputErrors(username, password);
        if (!success) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/server/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const userData = await response.json();
            if (userData.error) {
                throw new Error(userData.error);
            };

            localStorage.setItem('authUser', JSON.stringify(userData));
            setAuthUser(userData);

        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error('Please fill in all the fields');
        return false;
    }

    return true;
};