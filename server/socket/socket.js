import express from 'express';
import http from 'socket.io';
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
    }
});

export { app, io, server };