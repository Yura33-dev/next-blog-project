import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message, name } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res
        .status(422)
        .json({ status: 'fail', message: 'Form fields data is incorrect' });
      return;
    }

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.2rnzgwg.mongodb.net/?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res
        .status(500)
        .json({ status: 'failed', message: 'Connecting to database failed' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const db = client.db(process.env.mongodb_database);

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage['_id'] = result.insertedId;
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ status: 'failed', message: 'Saving to database failed' });
      return;
    }

    client.close();

    res.status(201).json({
      status: 'success',
      message: 'Data has been saved in database',
      data: newMessage,
    });
  }
}
