const mysql = require('mysql');

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connect.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`Connected to database ${process.env.DB_DATABASE} successfully on port ${connect.threadId}`);
});

module.exports = connect;