/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("coolants", function (table) {
    table.increments("id");
    table.string("coolant_type").notNullable();
    table.string("formula").notNullable();
    table.integer("gwp").notNullable();
    table.string("restricted").notNullable();
    table.text("notes");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("coolants");
}
