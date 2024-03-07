// routes/MessagesRoutes.js

import { Router } from 'express';
const router = Router();
import { createMessage, getAllMessages, getMessageById, updateMessage, deleteMessage } from '../Controllers/MessagesController';

// Create a message
router.post('/', createMessage);

// Read all messages
router.get('/', getAllMessages);

// Read a single message
router.get('/:id', getMessageById);

// Update a message
router.put('/:id', updateMessage);

// Delete a message
router.delete('/:id', deleteMessage);

export default router;
