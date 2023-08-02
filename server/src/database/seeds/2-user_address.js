/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const addresses = [
  {
    addressId: "9362fdfc-98f1-4bce-ac05-1c3b8b2d08cd",
    userId: "e9007992-add6-4982-991b-3aaedf3d7124",
    userAddress: "123 Main Street, City A, Country X",
  },
  {
    addressId: "7d7f8cbb-9383-4a2d-ae48-3f8a1cc076a8",
    userId: "e9007992-add6-4982-991b-3aaedf3d7124",
    userAddress: "456 Oak Avenue, City B, Country Y",
  },
  {
    addressId: "1b6025a5-1455-4d1b-bbf2-ef8c696fbf6a",
    userId: "e9007992-add6-4982-991b-3aaedf3d7124",
    userAddress: "789 Elm Road, City C, Country Z",
  },
  {
    addressId: "c3e6426f-439f-4c37-b915-5035d7a7e88b",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 1",
  },
  {
    addressId: "e3ac0420-62db-4bf7-9405-95089cfe16be",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 2",
  },
  {
    addressId: "2393f368-8e3c-415c-a672-41149dbd4d89",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 3",
  },
  {
    addressId: "13b7c2b6-7827-44d9-8606-907786a3f44d",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 4",
  },
  {
    addressId: "0dd78a84-d0fc-4874-bff7-541c8e3f9a47",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 5",
  },
  {
    addressId: "f4b35d2c-80d1-4b0b-86c7-cc9d68ecf64f",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 6",
  },
  {
    addressId: "ca609ec7-5c42-48dd-83ed-9460b501d3c2",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 7",
  },
  {
    addressId: "a0574502-8d5c-41ea-8e47-2a4937dd9aef",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 8",
  },
  {
    addressId: "2c0352b0-3a80-4012-b0c1-43229f6220df",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 9",
  },
  {
    addressId: "74b1a5b9-803a-42f2-8b03-4a4f5c4e87b8",
    userId: "a6665c10-9ad6-4e6c-8c20-a5b3131e88fd",
    userAddress: "Random Address 10",
  },
  {
    addressId: "b3b88ac2-484a-46af-bd9e-9d1b20f93a67",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "1234 Elm Street, Springfield, IL, 62701, USA",
  },
  {
    addressId: "7541b1a3-924c-4b80-8db0-0c1cc25a3693",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "5678 Oak Avenue, Cityville, CA, 90001, USA",
  },
  {
    addressId: "25c12879-13a4-4e46-bc67-86af3d5a853a",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "9012 Maple Lane, Townsville, NY, 10001, USA",
  },
  {
    addressId: "3492c7ac-4ac4-4e4d-9a56-61e1cbbba2a3",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "3456 Pine Road, Villagetown, TX, 75001, USA",
  },
  {
    addressId: "fa86a5c5-3a28-434d-8c85-74cb301d4373",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "7890 Birch Street, Hamletville, FL, 32003, USA",
  },
  {
    addressId: "30a1bc0a-78c3-44c8-92c6-5bde80016534",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "2468 Cedar Avenue, Suburbia, OH, 43004, USA",
  },
  {
    addressId: "abfe9e42-9c8c-47ca-b0f0-4df71a0f7202",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "5757 Willow Drive, Countryside, CO, 80023, USA",
  },
  {
    addressId: "76f84db2-1944-4c31-9195-2595c344c448",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "9099 Walnut Circle, Metroville, AZ, 85001, USA",
  },
  {
    addressId: "70f4a2dd-0722-46db-93c3-c5c1c72d1f2f",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "1111 Sycamore Avenue, Townburg, GA, 30004, USA",
  },
  {
    addressId: "6287ac19-4c6d-4d0b-940b-108df91c57d1",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "2222 Maplewood Court, Riverside, VA, 22000, USA",
  },
  {
    addressId: "cfaa8d36-8293-4ca1-b89b-6399e6ee7c9c",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "3333 Oakwood Lane, Hillside, WA, 98001, USA",
  },
  {
    addressId: "d579d4ae-4210-4be7-8043-5b8eb3d28d1b",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "4444 Willowwood Road, Valleytown, NC, 28078, USA",
  },
  {
    addressId: "e9dd5be5-3e6b-4d13-9151-5f472d18d75e",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "5555 Birchwood Street, Forestville, MD, 20001, USA",
  },
  {
    addressId: "2f4b002c-3f8c-4bf5-a116-47c9c4e1d96e",
    userId: "ecd2c847-80b9-40db-9b8e-73bfd42afb45",
    userAddress: "6666 Pine Lane, Rivertown, PA, 19001, USA",
  },
];
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("userAddress").del();
  await knex("userAddress").insert(addresses);
}
