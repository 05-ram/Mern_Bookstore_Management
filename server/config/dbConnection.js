const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://ram:ram123@contact-app.fcxws.mongodb.net/book-store?retryWrites=true&w=majority&appName=book-store")
        console.log(`Db Connected Successfully on ${connect.connection.db.databaseName}`);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;