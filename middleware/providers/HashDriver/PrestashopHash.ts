import { HashDriverContract } from '@ioc:Adonis/Core/Hash'
import bcrypt from 'bcrypt'

const saltRounds = 10

export class PrestashopHash implements HashDriverContract {
  public async make(value: string) {
    const hashedValue = bcrypt.hashSync(value, saltRounds)
    return hashedValue
  }

  public async verify(hashedValue: string, plainValue: string) {
    let newHash: string
    if (hashedValue.includes('$2y$10$')) {
      newHash = hashedValue.replace('$2y$10$', '$2a$10$')
    } else {
      newHash = hashedValue
    }
    return bcrypt.compareSync(plainValue, newHash)
  }
}
