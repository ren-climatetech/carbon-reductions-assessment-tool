/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("results", function (table) {
        table.string("refrigerationSystem").notNullable();
        table.string("coolantType").notNullable();
        table.integer("weightValue").notNullable();
        table.string("unit").notNullable();
});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("results");
}
