
exports.up = function(knex) {
    return knex.schema.createTable('events', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.string('location').nullable();
        table.string('datetime').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
