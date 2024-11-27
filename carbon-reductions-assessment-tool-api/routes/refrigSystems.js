//This file sends the seeded data from your database to the frontend. This is used for allowing drop down selections in the front end based on the databases in the backend.
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const systems = await knex("refrigeration_systems") // connect to database table
      .select("id", "system_type", "gwp_limit"); // select data identifiers

    res.json(systems); // package and send as a JSON response
  } catch (e) {
    console.error("Error fetching refrigeration systems:", e);
    res.status(500).json({ message: "Failed to fetch systems" });
  }
});

export default router;
