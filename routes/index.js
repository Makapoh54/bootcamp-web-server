import express from 'express';

import asyncMiddleware from '../middlewares/asyncMiddleware';
import { diskStorageSingle } from '../middlewares/diskStorage';
import index from '../controllers/indexController';

const router = express.Router();

router.post('/*', diskStorageSingle, asyncMiddleware(index));

export default router;
