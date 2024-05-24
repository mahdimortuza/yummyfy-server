import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
const port = 5000;
const { MongoClient } = require("mongodb");
require("dotenv").config();

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// MongoDB Connection URL
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("yummyFy");
    const recipeCollection = db.collection("recipe");
  } catch (error) {
    console.log(error);
  }
}
run().catch(console.dir);

const response = "Hello World! It's yummyFy.";
app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
