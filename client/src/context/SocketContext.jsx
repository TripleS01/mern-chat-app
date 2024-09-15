import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';

const BACKEND_URL = import.meta.env.VITE_APP_URL;

import useAuthContext from "./AuthContext";

export const SocketContext = createContext();

export default function useSocketContext() {
    return useContext (SocketContext);
};

export default function SocketContextProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState();
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io(BACKEND_URL, {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();

        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

    }, [])

    return (
        <>
            <SocketContext.Provider value={{ socket, onlineUsers }}>
                {children}
            </SocketContext.Provider>
        </>
    )
};