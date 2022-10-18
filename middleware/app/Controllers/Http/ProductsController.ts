import PrestashopAPI from '../../../utils/prestashop'

const Prestashop = new PrestashopAPI()

export default class ProductsController {
  public async list() {
    const products = await Prestashop.listProducts()
    return products.products
  }
}
