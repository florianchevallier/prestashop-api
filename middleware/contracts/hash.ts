/**
 * Contract source: https://git.io/Jfefs
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import { PrestashopHash } from 'providers/HashDriver/PrestashopHash'

declare module '@ioc:Adonis/Core/Hash' {
  interface HashDrivers {
    prestashopHash: {
      config: {
        driver: 'prestashopHash'
        rounds: number
        // ...rest of the config
      }
      implementation: PrestashopHash
    }
  }
}
