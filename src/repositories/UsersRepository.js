import { v4 as uuidv4 } from 'uuid';

export default class UsersRepository {
  constructor(databaseInstance) {
    this.database = databaseInstance;
    this.schema = 'User';
  }

  insert({ name, username, password }) {
    const data = { id: uuidv4(), name, username, password };

    this.database.write(() => {
      this.database.create(this.schema, data);
    });

    return data;
  }

  findByUsername(username) {
    const users = this.database
      .objects(this.schema)
      .filtered(`username = "${username}"`);

    if (users.length <= 0) {
      return null;
    }

    return users[0].toJSON();
  }

  findAll() {
    const users = this.database.objects(this.schema);

    return users.toJSON();
  }
}
