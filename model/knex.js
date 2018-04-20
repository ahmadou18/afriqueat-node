"use strict";
let environment = process.env.NODE_ENV || "development";
console.log("knex environnement: " + environment);
let config = require("../knexfile.js")[environment];
module.exports = require("knex")(config);