const { Router } = require("express");
const router = Router();
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
//const adminMiddleware = require('../middlewares/admin')

// User
router.post('/user', UserController.create);
router.get('/users', UserController.index);
router.get('/user/:id', UserController.show);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

// Product
router.post('/product', ProductController.create);
router.get('/products', ProductController.index);
router.get('/product/:id', ProductController.show);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.destroy);
router.put('/addPurchase/:id', ProductController.addPurchase);
router.put('/cancelPurchase/:id', ProductController.cancelPurchase);

module.exports = router