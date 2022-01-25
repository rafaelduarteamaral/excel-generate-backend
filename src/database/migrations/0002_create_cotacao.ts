import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('cotacao', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('valor').nullable();
    table.string('medida').nullable();
    table.string('casas_decimais').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('cotacao');
}
