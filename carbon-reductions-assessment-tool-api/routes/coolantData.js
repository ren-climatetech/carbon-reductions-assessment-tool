import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
try {
    const coolants = await knex ("coolant_types")
    .select ("coolant_type", "formula", "gwp", "restricted","notes");

    res.json(coolants);
} catch (e) {
    console.error("Error fetching coolant types:",e);
    res.status(500).json({ message: "Failed to fetch coolants"});
}
});

export default router;


