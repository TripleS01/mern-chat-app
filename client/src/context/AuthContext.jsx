import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function useAuthContext() {
    return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null);

    return (
        <>
            <div>
                <AuthContext.Provider value={{ authUser, setAuthUser }}>

                    {children}

                </AuthContext.Provider>

            </div>
        </>
    )
};