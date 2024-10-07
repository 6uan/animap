import express from "express";
import "./config/dotenv.js";
import cors from "cors";
import eventsRouter from "./routes/events.js"; // Updated to reference the events router

const app = express();

app.use(cors());

app.use("/events", eventsRouter); // Changed to handle "/events" route

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Central Park Zoo Events API</h1>'
    ); // Updated the title to reflect events context
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
