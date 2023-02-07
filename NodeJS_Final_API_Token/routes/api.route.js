const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const isAuth = require('../middleware/auth');
const upload = require('../config/uploadFile');

const api_routes = (app) => {
    // Category API routes
    app.get('/api/category', isAuth, categoryController.getAll);
    app.get('/api/category/:id', isAuth, categoryController.getByID);
    app.post('/api/category', isAuth, categoryController.create); 
    app.put('/api/category/:id', isAuth, categoryController.update);
    app.delete('/api/category/:id', isAuth, categoryController.delete);


    // Product API routes
    app.get('/api/product', isAuth, productController.getAll);
    app.get('/api/product/:id', isAuth, productController.getByID);
    app.post('/api/product', [upload.single('image'), isAuth], productController.create);
    app.put('/api/product/:id', [upload.single('image'), isAuth], productController.update);
    app.delete('/api/product/:id', isAuth, productController.delete);
};

module.exports = api_routes;