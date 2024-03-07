// Messages_SQL.js

import { getConnection } from './config'; // Import the getConnection function from your config.js file

export const createMessage = async ({ body, senderId, recipientIds }) => {
  const connection = await getConnection();
  try {
    await connection.query(
      'INSERT INTO messages (body, sender_id, recipient_ids) VALUES (?, ?, ?)',
      [body, senderId, recipientIds.join(',')]
    );
    return { body, senderId, recipientIds };
  } finally {
    connection.release();
  }
};

export const getAllMessages = async () => {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM messages');
    return rows;
  } finally {
    connection.release();
  }
};

export const getMessageById = async (id) => {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM messages WHERE id = ?', [id]);
    return rows[0];
  } finally {
    connection.release();
  }
};

export const updateMessage = async (id, body) => {
  const connection = await getConnection();
  try {
    await connection.query('UPDATE messages SET body = ? WHERE id = ?', [body, id]);
    return { id, body };
  } finally {
    connection.release();
  }
};

export const deleteMessage = async (id) => {
  const connection = await getConnection();
  try {
    await connection.query('DELETE FROM messages WHERE id = ?', [id]);
    return true; // Assuming successful deletion
  } finally {
    connection.release();
  }
};
