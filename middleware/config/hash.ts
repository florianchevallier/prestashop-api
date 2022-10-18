/**
 * Config source: https://git.io/JfefW
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { hashConfig } from '@adonisjs/core/build/config'

/*
|--------------------------------------------------------------------------
| Hash Config
|--------------------------------------------------------------------------
|
| The `HashConfig` relies on the `HashList` interface which is
| defined inside `contracts` directory.
|
*/
export default hashConfig({
  default: Env.get('HASH_DRIVER', 'prestashopHash'),

  list: {
    prestashopHash: {
      driver: 'prestashopHash',
      rounds: 10,
    },
  },
})
