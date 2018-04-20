
exports.up = function(knex, Promise) {
    return knex.schema.createTable('food', function (table) {
        table.increments("foodId")
        table.string("foodName").notNullable()
        table.string("foodDescription").notNullable()
        table.float("foodPrice", 2)
        table.string("foodImage").notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('food')
};
