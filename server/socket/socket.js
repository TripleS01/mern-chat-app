import express from 'express';
import http from 'http';
import { Server } from "socket.io";
import dotenv from 'dotenv';

dotenv.config();
const REACT_CORS_URL = process.env.REACT_CORS_URL;

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        credentials: true,
        origin: REACT_CORS_URL,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

// {userId: socketId}
const userSocketMap = {};

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    const userId = socket.handshake.userId;
    if (userId != 'undefined') {
        userSocketMap[userId] = socket.id
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    // socket.on() is used to listen to events. Can be used on client and server side
    socket.on("disconnect", () => {
        console.log(`User ${socket.id} disconnected`);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));

    });

});

export { app, io, server };