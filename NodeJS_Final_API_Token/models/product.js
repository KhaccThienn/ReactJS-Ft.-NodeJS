const conn = require('../config/database');

const product = {
    getAllProduct: (callback) => {
        let query = "SELECT * FROM product ORDER BY id DESC";
        conn.query(query, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    getProductByID: (id, callback) => {
        let query = "SELECT * FROM product WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    createProduct: (product, callback) => {
        let query = "INSERT INTO product SET ?";
        conn.query(query, product, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        })
    },
    updateProduct: (id, product, callback) => {
        let query = "UPDATE product SET ? WHERE id = ?";
        conn.query(query, [product, id ], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    deleteProduct: (id, callback) => {
        let query = "DELETE FROM product WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = product;
