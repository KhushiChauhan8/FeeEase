import express from 'express';
import authRoutes from './routes/auth.routes.js';
import feesRoutes from './routes/fees.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

// middlewares
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/fees', feesRoutes);

// 🔥 GLOBAL ERROR HANDLER (ALWAYS LAST)
app.use(errorHandler);

export default app;
