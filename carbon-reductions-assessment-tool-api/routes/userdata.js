//from CRUD Demo

// import initKnex from "knex";
// import configuration from "../knexfile.js";
// const knex = initKnex(configuration);
// import express from "express";

// const router = express.Router();

// router.post("/user-entry", async (req, res) => {

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
