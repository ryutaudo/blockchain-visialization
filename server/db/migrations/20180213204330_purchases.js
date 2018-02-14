
exports.up = (knex, Promise) => {
  return knex.schema.hasTable('purhcases').then((exist) => {
    if(!exist) {
      return knex.schema.createTable('purchases', (table) => {
        table.increments()
          .index();
    
        table.string('base')
          .notNullable();
        
        table.string('currency')
          .notNullable();
    
        table.date('purchased_at')
          .notNullable();
      });
    }
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('purchases');
};
