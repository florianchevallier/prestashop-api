import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PrestashopAPI from '../../../utils/prestashop'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer'

const Prestashop = new PrestashopAPI()

export default class UsersController {
  public async signup({ request }: HttpContextContract) {
    const newCustomerSchema = schema.create({
      passwd: schema.string(),
      lastname: schema.string(),
      firstname: schema.string(),
      email: schema.string([
        rules.email(),
        rules.normalizeEmail({
          allLowercase: true,
          gmailRemoveDots: true,
          gmailRemoveSubaddress: true,
        }),
      ]),
    })

    const newCustomer = await request.validate({ schema: newCustomerSchema })

    const prestashopCustomer = await Prestashop.signup(newCustomer)

    return prestashopCustomer.customer
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string(),
      password: schema.string(),
    })

    const { email, password } = await request.validate({ schema: loginSchema })

    try {
      await auth.use('web').attempt(email, password)
      response.noContent()
    } catch (err) {
      console.log('err', err)
      return response.badRequest('Invalid credentials')
    }
  }

  public async me({ auth, response }: HttpContextContract) {
    await auth.use('web').authenticate()
    const user = auth.use('web').user
    if (!user) return response.forbidden()
    return user
  }
}
