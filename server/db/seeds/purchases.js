const purchases = require('../data/purchases');

exports.seed = (knex, Promise) => {
  return knex('purchases').del()
    .then(() => {
      return knex('purchases').insert(purchases);
    });
};
