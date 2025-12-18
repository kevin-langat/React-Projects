const mongoose = require('mongoose');

async function connectToDb() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Mongo Db Connected');
  } catch (error) {
    console.log('Failed to connect to Mongo Db:', error);
  }
}

module.exports = connectToDb;
