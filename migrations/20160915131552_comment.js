
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {
    table.increments();
    table.integer('post_id').references('id').inTable('post').notNullable();
    table.string('author_id');
    table.string('body').notNullable();
    table.boolean('is_positive');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
