const refrigSystems = [
  {
    id: 1,
    system_type: "Stand-alone medium temperature refrigeration system",
    gwp_limit: 1400,
  },
  {
    id: 2,
    system_type: "Stand-alone low temperature refrigeration system",
    gwp_limit: 1500,
  },
  {
    id: 3,
    system_type: "Centralized refrigeration system",
    gwp_limit: 2200,
  },
  {
    id: 4,
    system_type: "Condensing unit",
    gwp_limit: 2200,
  },
  {
    id: 5,
    system_type: "Chiller (other than absorption or adsorption chiller)",
    gwp_limit: 750,
  },
  {
    id: 6,
    system_type: "Absorption or Adsorption chiller",
    gwp_limit: 1,
  },
  {
    id: 7,
    system_type: "Commercial Air Conditioning",
    gwp_limit: 2000,
  },
  {
    id: 8,
    system_type: "Heat Pump",
    gwp_limit: 2000,
  },
  {
    id: 9,
    system_type: "Absorption or Adsorption heat pump",
    gwp_limit: 1,
  },
];
export async function seed(knex) {
  // variables usersData and postsData are above
  await knex("refrigeration_systems").del();
  await knex("refrigeration_systems").insert(refrigSystems);
}
