// controllers/messages.js

// Import the Message model (assumed to be defined in models/Message.js)
import Message, { find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/Message';

const messagesController = {
  // Create a message
  createMessage: async (req, res) => {
    try {
      const { body, senderId, recipientIds } = req.body;
      const message = new Message({ body, senderId, recipientIds });
      await message.save();
      res.status(201).json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Read all messages
  getAllMessages: async (req, res) => {
    try {
      const messages = await find();
      res.json({ messages });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Read a single message by ID
  getMessageById: async (req, res) => {
    try {
      const message = await findById(req.params.id);
      if (!message) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a message
  updateMessage: async (req, res) => {
    try {
      const { body } = req.body;
      const message = await findByIdAndUpdate(req.params.id, { body }, { new: true });
      if (!message) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a message
  deleteMessage: async (req, res) => {
    try {
      const message = await findByIdAndDelete(req.params.id);
      if (!message) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default messagesController;
