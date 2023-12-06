import express from 'express';

import { Controller } from '../middleware/controllers/controller';

const router = express.Router();

router.use('/users', Controller);

export { router };