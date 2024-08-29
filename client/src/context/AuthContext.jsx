import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const useAuthContext = () => {

    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null);

    return (
        <div>
            <>
                <AuthContext.Provider value={{ authUser, setAuthUser }}>

                    {children}

                </AuthContext.Provider>
            </>

        </div>
    )
};