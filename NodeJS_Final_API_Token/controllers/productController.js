const product = require('../models/product');
const fs = require('fs');

const productController = {
    getAll: (req, res) => {
        product.getAllProduct((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },

    getByID: (req, res) => {
        product.getProductByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    create: (req, res) => {
        req.body.image = req.get('host') + `/${req.file.filename}`;
        product.createProduct(req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    update: (req, res) => {
        product.getProductByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                if (req.file != null) {
                    req.body.image = req.get('host') + `/${req.file.filename}`;
                    const old_file_path = "./uploads/"+data[0].image.replace("localhost:8000/", "");
                    console.log(old_file_path);
                    fs.unlink(old_file_path, (err) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log('File was deleted');
                    });
                } else {
                    req.body.image = data[0].image;
                }

                product.updateProduct(req.params.id, req.body, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200).json(result);
                    }
                });
            }
        });
    },
    delete: (req, res) => {
        product.getProductByID(req.params.id, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                const file_path = "./uploads/"+result[0].image.replace("localhost:8000/", "");
                fs.unlink(file_path, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('File was deleted');
                });
                product.deleteProduct(req.params.id, (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200).json(result);
                    }
                });
            }
        });
        
    }
};

module.exports = productController;
