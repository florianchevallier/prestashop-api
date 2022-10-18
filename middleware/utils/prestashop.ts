import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { Customer } from 'types/prestashop/Customer'
import { Product } from 'types/prestashop/Product'
import { toXML } from 'jstoxml'

export default class PrestashopAPI {
  private baseURL: string = Env.get('PRESTASHOP_API_URL')

  private async post<T>(path: 'customers', data: any) {
    const config = {
      method: 'post',
      url: `${this.baseURL}/${path}`,
      headers: {
        'Content-Type': 'application/xml',
        'Output-Format': 'JSON',
      },
      data: data,
    }

    return axios(config)
      .then(function (response) {
        return response.data as T
      })
      .catch(function (error) {
        console.log('error', error.response.data)
        throw new Error(JSON.stringify(error.response.data))
      })
  }
  private async get<T>(path: string, params: Object = {}) {
    return axios
      .get<T>(`${this.baseURL}/${path}?output_format=JSON`, {
        params,
      })
      .then(function (response) {
        return response.data as T
      })
      .catch(function (error) {
        console.log('error', error.response.data)
        throw new Error(JSON.stringify(error.response.data))
      })
  }

  public async listProducts() {
    const prestashopAPI = await this.get<{ products: Product[] }>('products', {
      display: `[id, name, link_rewrite, price, id_default_image]`,
    })
    return prestashopAPI
  }

  public async getServices() {
    const prestashopAPI = await this.get<string[]>('services')
    return prestashopAPI
  }

  public async signup(newCustomer: Customer) {
    const xml = this.convertToXML(newCustomer)
    const newUser = await this.post<{ customer: Customer }>('customers', xml)
    return newUser
  }

  private convertToXML(data: Object) {
    const xml = toXML(
      {
        _name: 'prestashop',
        _attrs: {
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        },
        _content: {
          customer: data,
        },
      },
      { header: false, indent: '  ' }
    )
    return xml
  }
}
