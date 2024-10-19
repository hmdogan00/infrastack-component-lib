/* eslint-disable no-use-before-define */
const pgp = require('pg-promise');

class Database {
  private static instance: Database;

  private connection: any;

  private constructor() {
    const db = pgp()('postgres://postgres:postgres@localhost:5432/postgres');
    this.connection = db;
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public getConnection() {
    return this.connection;
  }
}

export default Database;
