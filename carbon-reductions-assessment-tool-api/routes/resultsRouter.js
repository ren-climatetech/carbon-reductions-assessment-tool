import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    try {
      const {
        refrigerationSystem,
        coolantType,
        weightValue,
        unit,
        ...otherFields
      } = req.body;

      // Step 1: Calculate weightInMetricTons of the coolant purchased
      let weightInMetricTons;
      if (unit === "lbs") {
        weightInMetricTons = weightValue * 0.000454;
      } else if (unit === "kg") {
        weightInMetricTons = weightValue * 0.001;
      }

      // Step 2: Find the GWP value from the coolant_types table
      const coolant = await knex("coolant_types")
        .select("gwp")
        .where("coolant_type", coolantType) // Matches the coolantType in the database
        .first();

      const gwp = coolant.gwp;

      // Step 3: Calculate the CO2 equivalent
      const co2Equivalent = weightInMetricTons * gwp;

      //Step 4: Find the gwp_limit from the refrigeration_systems table

      const refrigerationSystemData = await knex("refrigeration_systems")
        .select("gwp_limit")
        .where("system_type", refrigerationSystem)
        .first();

        const gwp_limit = refrigerationSystemData.gwp_limit;
        
//Step 5: Multiply to get CO2e 
        const gwpLimitResult = weightInMetricTons * gwp_limit;

        //Step 6: Subtract

        const difference = co2Equivalent - gwpLimitResult; 

        const carboncredits = difference * 65;

      const dataToInsert = {
        ...otherFields,
        unit,
        weightValue,
        coolantType,
        refrigerationSystem,
        weightInMetricTons,
        co2Equivalent,
        gwpLimitResult,
        difference,
        carboncredits,
      };

      const ids = await knex("results").insert(dataToInsert);
      const id = ids[0];
      res.status(201).json({ id });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Error getting inputs",
      });
    }
  })

  .get(async (req, res) => {
    try {
      const results = await knex("results").select();

      res.json(results);
    } catch (e) {}
  });

export default router;
