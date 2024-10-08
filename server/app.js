import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectToMongoDB from './db/connectToMongoDB.js';
import router from './routes.js';
import { app, server } from './socket/socket.js';

dotenv.config();
const PORT_URL = process.env.PORT_URL;
const REACT_CORS_URL = process.env.REACT_CORS_URL;

app.use(cors({
    credentials: true,
    origin: REACT_CORS_URL,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/', router);

server.listen(PORT_URL, () => {
    connectToMongoDB();
    console.log(`Server is listening on http://localhost:${PORT_URL}...`);
});