// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Application } = initSchema(schema);

export {
  User,
  Application
};