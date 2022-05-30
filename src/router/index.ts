import { Router } from 'express';
import { userRouter } from '../components/user/router.user';
import { slideRouter } from '../components/slide/router.slide';

const router = Router();

router.use('/user', userRouter);
router.use('/slide', slideRouter);

export const mainRouter = router;
