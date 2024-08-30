import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const generateTokenAndSetCookie = (userId, response) => {
    
    const token = jwt.sign({ userId }, JWT_SECRET_KEY, {
        expiresIn: '24h',
    });

    response.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
    });

};

export default generateTokenAndSetCookie;