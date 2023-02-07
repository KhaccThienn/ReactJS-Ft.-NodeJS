const conn = require('../config/database');

const category = {
    getAllCategory: (callback) => {
        let query = "SELECT * FROM category ORDER BY id DESC";
        conn.query(query, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },
    getCategoryByID: (id, callback) => {
        let query = "SELECT * FROM category WHERE id = ?";
        conn.query(query, id, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },
    createCategory: (newCate, callback) => {
        let query = "INSERT INTO category SET ?";
        conn.query(query, newCate, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },
    updateCategory: (id, cate, callback) => {
        let query = "UPDATE category SET ? WHERE id = ?";
        conn.query(query, [cate, id], (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },
    deleteCategory: (id, callback) => {
        let query = "DELETE FROM category WHERE id = ?";
        conn.query(query, [id], (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    }
};

module.exports = category;
