/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema
    .createTable("userAddress", (table) => {
      table
        .uuid("addressId")
        .primary()
        .notNullable();
      table
        .uuid("userId")
        .references("userId")
        .inTable("users")
        .onDelete("CASCADE");
      table.string("userAddress").notNullable();
      table.timestamps(true, true);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists("userAddress");
}
