const category = require('../models/category');

const categoryController = {
    getAll: (req, res) => {
        category.getAllCategory((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },

    getByID: (req, res) => {
        category.getCategoryByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },

    create: (req, res) => {
        category.createCategory(req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json({data, message: "Created category"});
            }
        });
    },

    update: (req, res) => {
        category.updateCategory(req.params.id, req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json({
                    data, message: "Updated category"
                });
            }
        });
    },

    delete: (req, res) => {
        category.deleteCategory(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json({
                    data, message: "Deleted category"
                });
            }
        });
    }
};

module.exports = categoryController;
