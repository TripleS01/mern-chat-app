import User from "../models/userModel.js";

export const getUsersSidebar = async (request, response) => {

    try {
        const { search = '' } = request.query;
        const loggedUser = request.user._id;

        const searchQuery = {
            ...{ _id: { $ne: loggedUser } },
            ...(search ? { username: { $regex: search, $options: 'i' } } : {})
        };

        const allUsers = await User.find(searchQuery).select('-password');

        response.status(200).json(allUsers);

    } catch (error) {
        console.log('Error is in getUsersSidebar controller:', error.message);
        response.status(500).json({ error: 'Internal server error' });
    }

};