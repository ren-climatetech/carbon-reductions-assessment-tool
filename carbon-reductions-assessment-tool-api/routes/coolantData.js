import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

router.get("/coolants", async (req, res) => {
try {
    const coolants = await knex ("coolant_types")
    .select ("coolant_type", "formula", "gwp", "restricted","notes");

    res.json(coolants);
} catch (e) {
    console.error("Error fetching refrigeration systems:",e);
    res.status(500).json({ message: "Failed to fetch coolants"});
}
});

export default router;

// draft for pulling data from the front end 
//     const {refrigerationSystem, coolantType, amount} = req.body;

//   try {
//     const data = await knex("user-data") //new table name
// .where({
//     refrigeration_system: refrigerationSystem, 
//     coolant_type: coolantType,
// })
// .select('*');

// res.json(data);

//   } catch (e) {
//     res.status(500).json({
//       message: "Error getting data",
//     });
//   }
// });

// export default router;
