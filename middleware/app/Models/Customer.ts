import { DateTime } from 'luxon'
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
  public static table = 'ps_customer'

  @column({ isPrimary: true, columnName: 'id_customer' })
  public id_customer?: number

  @column()
  public email: string

  @column({ serializeAs: null, columnName: 'passwd' })
  public password: string

  @column()
  public idShopGroup?: number

  @column()
  public idShop?: number

  @column()
  public idGender?: number

  @column()
  public idDefaultGroup?: number

  @column()
  public idLang?: number

  @column()
  public idRisk?: number

  @column()
  public company?: string

  @column()
  public siret?: string

  @column()
  public ape?: string

  @column()
  public firstname?: string

  @column()
  public lastname?: string

  @column()
  public lastPasswdGen?: DateTime

  @column()
  public birthday?: DateTime

  @column()
  public newsletter?: number

  @column()
  public ipRegistrationNewsletter?: string

  @column()
  public newsletterDateAdd?: DateTime

  @column()
  public optin?: number

  @column()
  public website?: string

  @column()
  public outstandingAllowAmount?: string

  @column()
  public showPublicPrices?: number

  @column()
  public maxPaymentDays?: number

  @column({ serializeAs: null })
  public secureKey?: string

  @column()
  public note?: string

  @column({ serializeAs: null })
  public active?: number

  @column()
  public isGuest?: number

  @column({ serializeAs: null })
  public deleted?: number

  @column()
  public dateAdd?: DateTime

  @column()
  public dateUpd?: DateTime

  @column({ serializeAs: null })
  public resetPasswordToken?: string

  @column()
  public resetPasswordValidity?: DateTime
}
