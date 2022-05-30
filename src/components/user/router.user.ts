import { Router } from 'express'
import {register, login} from './router.controller.user'

const router = Router();

router.post('/', register);
router.post('/login', login);

export const userRouter = router;
