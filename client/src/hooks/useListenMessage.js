import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";
import receiveMessageSound from '../assets/sounds/receiveMessage.wav'

export default function useIncomingSocketMessage() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {

            const sound = new Audio(receiveMessageSound);
            sound.play();

            setMessages([...messages, newMessage]);
        });

        return () => socket?.off('newMessage');

    }, [socket, messages, setMessages]);

};