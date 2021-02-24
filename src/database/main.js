import Realm from 'realm';

import { SCHEMA_VERSION, MAIN_REALM_PATH } from '@constants/database';

import schema from './schemas';

/**
 * Whenever a schema is updated, the schema version must be incremented.
 * This works like a migration, and the app will throw an exception if
 * a schema is updated and the schema version don't.
 */
export default new Realm({
  schema,
  schemaVersion: SCHEMA_VERSION,
  path: MAIN_REALM_PATH,
});
