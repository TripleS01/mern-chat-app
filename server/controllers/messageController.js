import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessages = async (request, response) => {

    try {
        const { message } = request.body;
        const { id: receiverId } = request.params;
        const senderId = request.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);
        // await conversation.save();
        // await newMessage.save();

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        response.status(201).json(newMessage);

    } catch (error) {
        console.log('Error is in sendMessages controller:', error.message);
        response.status(500).json({ error: 'Internal server error' });
    }

};

export const getMessages = async (request, response) => {

    try {
        const { id: senderId } = request.params;
        //User who we will be chatting with
        const receiverId = request.user._id;
        //We who will receive messages and send ones

        const conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId] },
        }).populate('messages');
        if (!conversation) {
            return response.status(200).json([]);
        }

        const messages = conversation.messages;

        response.status(201).json(messages);

    } catch (error) {
        console.log('Error is in getMessages controller:', error.message);
        response.status(500).json({ error: 'Internal server error' });
    }

};