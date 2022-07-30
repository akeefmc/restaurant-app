exports.up = function (knex) {
  return knex.schema.createTable("reservations", (table) => {
    table.increments("reservation_id").primary();
    table.timestamps(true, true);
  });
};
//testing
exports.down = function (knex) {
  return knex.schema.dropTable("reservations");
};
