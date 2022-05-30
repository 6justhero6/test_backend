import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import {notFound} from './middlewares/notFound';
import {errorHandler} from './middlewares/errorHandler';
import {mainRouter} from './router';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';

export const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);

app.use(notFound);
app.use(errorHandler);
