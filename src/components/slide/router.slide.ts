import { Router } from 'express'
import {auth} from '../../middlewares/auth';
import {create, getAll} from './router.controller.slide';

const router = Router();

router.post('/', auth, create);
router.get('/', auth, getAll);

export const slideRouter = router
