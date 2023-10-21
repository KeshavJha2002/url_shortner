import { Router } from "express";
import { generateNewUrl, redirectedUrl, getTotalCount } from '../controllers/api.js';

const router = Router();

router.route('/')
    .post(generateNewUrl)

router.route('/:id')
    .get(redirectedUrl)


router.route('/analytics/:id')
    .get(getTotalCount)

export default router;