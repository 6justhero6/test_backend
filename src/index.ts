import * as http from 'http';
import { app } from './app';
import { mongooseConnect } from './lib/mongoose';
import {get} from './lib/env';

const PORT = get('PORT') || 5000;
const server = http.createServer(app);

Promise.resolve()
  .then(mongooseConnect)
  .then(() => server.listen(PORT))
  .then(() => console.log('STARTED'))

