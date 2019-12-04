class DB {
  constructor(data) {
    if (DB.exist) {
      return DB.instance;
    }

    DB.instance = this;
    DB.exist = true;
    this.data = data;
  }

  getDate() {
    return this.data;
  }
}

const mongo = new DB('MongoDB');
