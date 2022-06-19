import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_cluster}.xru866t.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // checks request method
  if (req.method === "POST") {
    // body validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim === "" ||
      !message ||
      message.trim() === ""
    ) {
      res
        .status(422)
        .json({ message: "Invalid Data.", error: "Request Failed." });

      return;
    }

    // connecting to database
    try {
      await client.connect();
      console.log("DB CONNECTED");
    } catch (err) {
      res
        .status(500)
        .json({ message: "Could not connect to databse", error: err.message });
      return;
    }

    const db = client.db(process.env.mongo_dbname);
    const collection = db.collection(process.env.mongo_collection);
    const newMessage = {
      email,
      name,
      message,
    };

    // insert one new message
    try {
      const result = await collection.insertOne(newMessage);

      client.close();
      res.status(201).json({ message: "success", data: result });
    } catch (err) {
      client.close();
      res.status(500).json({
        message: "Error sending message.",
        error: err.message,
      });
      return;
    }
  }
}
