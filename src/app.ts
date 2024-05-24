import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
const port = 5000;

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
// app.use(cors({ origin: "https://ocean-catch-client.vercel.app" }));

const response = "Hello World! It's yummyfy.";
app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
