import { Router } from 'express';
import cartRoutes from './cart.routes.js';
import orderRoutes from './order.routes.js';
import productRoutes from './product.routes.js';

const rootRouter = Router();

rootRouter.use('/cart', cartRoutes);
rootRouter.use('/order', orderRoutes);
rootRouter.use('/products', productRoutes);

export default rootRouter;
