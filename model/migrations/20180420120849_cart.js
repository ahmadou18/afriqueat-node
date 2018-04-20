
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cart', function (table) {
        table.dateTime("datetimeCart")
        table.integer("id_user").unsigned().notNullable()
        table.foreign("id_user").references("users.userId").onUpdate("CASCADE").onDelete("CASCADE")


        table.integer("id_food").unsigned().notNullable()
        table.foreign("id_food").references("food.foodId").onUpdate("CASCADE").onDelete("CASCADE")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cart')
};
