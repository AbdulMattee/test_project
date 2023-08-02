/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/* - In real applications users are not seeded 
  - We are seeding passwords that are already encrypted (password1, password2, password3 are plain texts)
  - The reason we are inserting Ids by ourselves is 
    because we need them in seeding address table
*/

import bcrypt from "bcrypt";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      userId: "e9007992-add6-4982-991b-3aaedf3d7124",
      username: "user1",
      password: bcrypt.hashSync("password1", 10),
    },
    {
      userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
      username: "user2",
      password: bcrypt.hashSync("password2", 10),
    },
    {
      userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
      username: "user3",
      password: bcrypt.hashSync("password3", 10),
    },
  ]);
}
