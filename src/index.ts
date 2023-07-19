import express from "express";
import bovines from "./routes/bovines";
import { connectionClient } from "./client";

const app = express();

app.use(express.json());

//routes
app.use("/api/bovines", bovines);

app.get("/", (req, res) => {
  res.send("Hello word");
});

const x: number = 7;
const y: number = 3;

console.log(x + y);
connectionClient.connect().then(() => {
  app.listen(3000, () => {
    console.log("Server on port 3000");
  });
});
