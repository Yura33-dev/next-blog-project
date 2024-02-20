import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message, name } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res
        .status(422)
        .json({ status: "fail", message: "Form fields data is incorrect" });
      return;
    }

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://33yurakasyan:q6iyn4BGuzvcq8ha@cluster0.2rnzgwg.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", message: "Connecting to database failed" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const db = client.db("next-blog-project");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage["_id"] = result.insertedId;
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ status: "failed", message: "Saving to database failed" });
      return;
    }

    client.close();

    res.status(201).json({
      status: "success",
      message: "Data has been saved in database",
      data: newMessage,
    });
  }
}
