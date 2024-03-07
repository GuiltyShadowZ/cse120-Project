// controllers/MessagesController.js

import {createMessage, getAllMessages, getMessageById, updateMessage, deleteMessage} from '../Queries/Messages_SQL';

const MessagesController = {
  // Create a message
  createMessage: async (req, res) => {
    try {
      const { body, senderId, recipientIds } = req.body;
      const message = await createMessage({ body, senderId, recipientIds });
      res.status(201).json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Read all messages
  getAllMessages: async (req, res) => {
    try {
      const messages = await getAllMessages();
      res.json({ messages });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Read a single message by ID
  getMessageById: async (req, res) => {
    try {
      const message = await getMessageById(req.params.id);
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
      const message = await updateMessage(req.params.id, body);
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
      const messageDeleted = await deleteMessage(req.params.id);
      if (!messageDeleted) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default MessagesController;
