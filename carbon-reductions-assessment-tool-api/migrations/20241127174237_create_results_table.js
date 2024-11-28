/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("results", function (table) {
    table.increments("id");
    table.string("refrigerationSystem").notNullable();
    table.string("coolantType").notNullable();
    table.integer("weightValue").notNullable();
    table.string("unit").notNullable();
    table.integer("weightInMetricTons").notNullable();
    table.integer("co2Equivalent").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("results");
}
