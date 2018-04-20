
exports.up = function(knex, Promise) {

    return knex.schema.createTable('users', function (table) {
        table.increments("userId")
        table.string("firstName").notNullable()
        table.string("lastName").notNullable()
        table.string("email").notNullable().unique()
        table.string("password").notNullable()
        table.boolean("isAdmin").notNullable().defaultTo('false')
    })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
