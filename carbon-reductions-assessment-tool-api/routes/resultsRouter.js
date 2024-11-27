import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

router.route("/").post(async (req, res) => {
  const { refrigerationSystem, coolantType, weightValue, unit } = req.body;
  
  try {
    const input = await knex("result").where({
      refrigeration_system: refrigerationSystem,
      coolant_type: coolantType,
      weight: weightValue,
      unit: unit,
    });

    res.status(201).json(input);
  } catch (e) {
    res.status(500).json({
      message: "Error getting inputs",
    });
  }
});

export default router;
