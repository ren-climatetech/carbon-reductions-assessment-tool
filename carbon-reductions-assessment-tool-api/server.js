import express from "express";
import cors from "cors";
import systemsRoutes from "./routes/refrigSystems.js";

const app = express() 

app.use(cors())
app.use(express.json());
app.use("/api", systemsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});