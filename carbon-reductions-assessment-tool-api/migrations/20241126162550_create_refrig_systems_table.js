/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("refrigeration_systems", function (table) {
    table.increments("id");
    table.string("system_type").notNullable();
    table.integer("gwp_limit").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("refrigeration_systems");
}
