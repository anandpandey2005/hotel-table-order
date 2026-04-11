import { Router } from 'express';
import cartRoutes from './cart.routes.js';
import orderRoutes from './order.routes.js';
import productRoutes from './product.routes.js';
import authRoutes from './auth.routes.js';
import chefRoutes from './chef.routes.js';
import groundStaffRoutes from './groundStaff.routes.js';
import managerRoutes from './manager.routes.js';
import customerRoutes from './customer.routes.js';

const rootRouter = Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/manager', managerRoutes);
rootRouter.use('/chef', chefRoutes);
rootRouter.use('/ground-staff', groundStaffRoutes);
rootRouter.use('/customer', customerRoutes);
rootRouter.use('/products', productRoutes);
rootRouter.use('/cart', cartRoutes);
rootRouter.use('/order', orderRoutes);

export default rootRouter;
