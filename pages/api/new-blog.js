import { MongoClient } from "mongodb";

async function handler(req, res) {
  // req.method, req.body
  if (req.method !== "POST") return;

  const { image, title, description, details } = req.body;
  const slug = title.replace(" ", "-").toLowerCase();

  if (!image || !title || !description || !details) return;
  
// Add mongoDB connection string here
  const client = await MongoClient.connect(
    ""
  );

  const db = client.db()

  const postCollection = db.collection("posts")

  const result = postCollection.insertOne({ image, title, description, details, slug })

  client.close()

  res.status(201).json({
    post: result,
    message: "Post Created"
  })
}

export default handler;
