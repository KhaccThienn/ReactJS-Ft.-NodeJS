const conn = require('../config/database');

const users = {
    getAllUser: (callback) => {
        let query = "SELECT * FROM users ORDER BY id DESC";
        conn.query(query, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    register: (account, callback) => {
        let query = "INSERT INTO users SET ?";
        conn.query(query, account, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    checkAccountLogin: (account, callback) => {
        let query = "SELECT * FROM users WHERE email = ?";
        conn.query(query, account, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    setToken: (id, token, callback) => {
        let query = "UPDATE users SET ? WHERE id = ?";
        conn.query(query, [token, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    verifyToken: (token, callback) => {
        let query = "SELECT * FROM users WHERE refresh_token = ?";
        conn.query(query, token, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = users;