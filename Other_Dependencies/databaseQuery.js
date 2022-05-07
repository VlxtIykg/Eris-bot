import db from "better-sqlite3";
import * as dbPathImport from './pathForDb.js'

const Database = new db(dbPathImport.dbPath(import.meta.url, '../data/profits.db')/* , {verbose:console.log} */);

const table = 'CREATE TABLE IF NOT EXISTS profits_table (day INTEGER PRIMARY KEY AUTOINCREMENT, profits INTEGER, userID INTEGER NOT NULL)'
Database.exec(table)

export const weekly_profits = Database.prepare('SELECT day, sum(profits) as weekly_profits from profits_table where day <= 7').get()
export const monthly_profits = Database.prepare('SELECT day, sum(profits) as monthly_profits from profits_table where day <= 31').get()
export const current_profits = Database.prepare('SELECT day, sum(profits) as current_profits from profits_table').get()
export const overview = Database.prepare('SELECT * from profits_table').all()

export const drop = (table) => {
    const dropDb = 'DROP TABLE IF EXISTS ' + table;
    Database.exec(dropDb)
}