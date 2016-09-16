
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', (table) => {
    table.increments();
    table.string('title');
    table.string('subtitle');
    table.string('author_id');
    table.string('body');
    table.boolean('can_comment');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
