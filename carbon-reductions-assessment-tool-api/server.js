import express from "express";
import cors from "cors";
import systemsRouter from "./routes/refrigSystems.js";

const app = express() 

app.use(cors())
app.use(express.json());
app.use("/api", systemsRouter);


// put this in new router file for new 'results' table

app.post('/results', async (req, res) => {
  console.log('from client!', req.body)
  // do calc
  // insert into results table
  // send results back...
  res.status(201).json({})
})

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});