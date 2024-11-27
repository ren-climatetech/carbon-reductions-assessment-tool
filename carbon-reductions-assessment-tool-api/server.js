import express from "express";
import cors from "cors";
import systemsRouter from "./routes/refrigSystems.js";

const app = express() 

app.use(cors())
app.use(express.json());
app.use("/api", systemsRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});