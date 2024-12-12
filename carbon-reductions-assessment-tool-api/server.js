import express from "express";
import cors from "cors";
import systemsRouter from "./routes/refrigSystems.js";
import coolantsRouter from "./routes/coolantData.js"; 
import resultsRouter from "./routes/resultsRouter.js";

const BASE_URL = import.meta.env.VITE_API_URL;
const { CORS_ORIGIN } = process.env;

const app = express() 

// app.use(cors())

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use("/api/systems", systemsRouter);
app.use("/api/coolants", coolantsRouter);
app.use("/api/results", resultsRouter); 




const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on ${BASE_URL}:${PORT}`);
});



