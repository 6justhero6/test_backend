import * as mongoose from 'mongoose';
import {get} from "./env";

const HOST = get('DB.HOST')
const USERNAME = get('DB.USERNAME')
const PASSWORD = get('DB.PASSWORD')
const NAME = get('DB.NAME')
const PORT = get('DB.PORT')

export const mongooseConnect = function() {
  const uri = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${NAME}`;

  return mongoose.connect(uri)
    .then(() => {
      console.log('MONGO CONNECTED');
    })
    .catch((ex) => {
      console.log('MONGO CONNECTION ERROR ' + ex.message);
      throw ex;
    });
};
