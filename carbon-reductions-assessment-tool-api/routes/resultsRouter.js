import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {

    // take req.body, and calculate
    // const dataToInsert = {...req.body, calc: calc}
    // const ids = await knex("results").insert(dataToInsert);
    // insert

    const ids = await knex("results").insert(req.body);
    const id = ids[0]
    res.status(201).json(id);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Error getting inputs",
    });
  }
});

export default router;
