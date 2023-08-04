const productController = require ('../src/controllers/productController');
Router.get('/',productController.index);