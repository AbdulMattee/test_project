/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
/* - In real applications users are not seeded 
  - We are seeding passwords that are already encrypted
  - The reason we are inserting Ids by ourselves is 
    because we need them in seeding address table
*/


export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {userId:"e9007992-add6-4982-991b-3aaedf3d7124", username: "mattee", password: "$2y$10$VqZa5.Qc2K2NrI3AEwC1KOh046sg8QB4o8G2fghQ16cbAtJCf4W/i"},
    {userId:"a6665c10-9ad6-4e6c-8c20-a5b3131e88fd", username: "user2", password: "$2y$10$c2.Ndt70Nocdub5Df/kD/ea4aa8nkm/iZkWjjz/GeySCQbl4.cl.a"},
    {userId:"ecd2c847-80b9-40db-9b8e-73bfd42afb45", username: "user3", password: "$2y$10$4XT/QM3hSNADEz85GYR5d.YWHdQZW4iBhr0YiJa2toHMwAHDsfZUy"}
  ]);
};
