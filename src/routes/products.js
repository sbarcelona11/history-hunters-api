import express from 'express';

const productRouter = express.Router();
import {
    getAllProducts,
    getProduct,
    getAllProductsForUser,
    addProduct,
    updateProduct,
    deleteProduct
} from '../controllers/products';

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProduct);
productRouter.get('/user/:userId', getAllProductsForUser);
productRouter.post('/add', addProduct);
productRouter.put('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

export default productRouter;
