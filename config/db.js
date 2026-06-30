const config = require('mongoose');
const db = async () => {
    try {
        await config.connect(process.env.MONGOURI) 
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
        console.log("Database connection failed");
        process.exit(1);
    }
}
module.exports = db;