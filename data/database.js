/**   Required Varibles   **/
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    // If we already have a connection go back
    if (database) {
        console.log("Db is already initialized!");
        return callback(null, database);
    }

    // Create a new connection
    MongoClient.connect(process.env.MONGO_URI)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((error) => {
            callback(error)
        })
};

const getDatabase = () => {
    // If database is not initialized
    if (!database) {
        throw new Error('Database not initialized')
    }

    return database;
};

module.exports = {initDb, getDatabase};