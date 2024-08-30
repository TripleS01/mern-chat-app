import User from "../models/userModel.js";

export const getUsersSidebar = async (request, response) => {
    
    try {
        const allUsers = await User.find().select('-password');

        response.status(200).json(allUsers);

    } catch (error) {
        console.log('Error is in getUsersSidebar controller:', error.message);
        response.status(500).json({ error: 'Internal server error' });
    }

};
