import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) { }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const { PrestashopHash } = await import('./HashDriver/PrestashopHash')
    const Hash = this.app.container.use('Adonis/Core/Hash')

    Hash.extend('prestashopHash', () => {
      return new PrestashopHash()
    })
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
