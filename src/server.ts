import app from "./app";
import config from "./config";
const { MongoClient } = require("mongodb");
require("dotenv").config();

// MongoDB Connection URL
const client = new MongoClient(config.database_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = client.db("yummyFy");

export const recipe = database.collection("recipe");

async function server() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server().catch((err) => console.log(err));
