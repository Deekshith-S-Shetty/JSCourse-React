const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const Db = process.env.QUESTIONS_DB_URI;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async function (callback) {
    try {
      await client.connect().then(() => {
        console.log("successfully connected to mongoDB");
      });
    } catch (e) {
      console.error(e);
    }

    _db = client.db("JSCourse");

    return _db === undefined ? false : true;
  },
  getDb: function () {
    return _db;
  },
};
