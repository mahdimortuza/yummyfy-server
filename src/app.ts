import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalRoute from "./routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/v1", globalRoute);

const response = "Hello World! It's yummyFy.";

app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

export default app;
