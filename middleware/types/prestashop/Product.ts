export interface Product {
  id: string
  id_manufacturer: string
  id_supplier: string
  id_category_default: string
  new: string
  cache_default_attribute: string
  id_default_image: string
  id_default_combination: string
  id_tax_rules_group: string
  position_in_category: string
  type: string
  id_shop_default: string
  reference: string
  supplier_reference: string
  location: string
  width: string
  height: string
  depth: string
  weight: string
  quantity_discount: string
  ean13: string
  isbn: string
  upc: string
  mpn: string
  cache_is_pack: string
  cache_has_attachments: string
  is_virtual: string
  state: string
  additional_delivery_times: string
  delivery_in_stock: AvailableLater
  delivery_out_stock: AvailableLater
  on_sale: string
  online_only: string
  ecotax: string
  minimal_quantity: string
  low_stock_threshold: string
  low_stock_alert: string
  price: string
  wholesale_price: string
  unity: string
  unit_price_ratio: string
  additional_shipping_cost: string
  customizable: string
  text_fields: string
  uploadable_files: string
  active: string
  redirect_type: string
  id_type_redirected: string
  available_for_order: string
  available_date: string
  show_condition: string
  condition: string
  show_price: string
  indexed: string
  visibility: string
  advanced_stock_management: string
  date_add: string
  date_upd: string
  pack_stock_type: string
  meta_description: AvailableLater
  meta_keywords: AvailableLater
  meta_title: AvailableLater
  link_rewrite: AvailableLater
  name: AvailableLater
  description: AvailableLater
  description_short: AvailableLater
  available_now: AvailableLater
  available_later: AvailableLater
  associations: Associations
}

export interface Associations {
  categories: Categories
  images: Images
  combinations: Combinations
  product_option_values: ProductOptionValues
  product_features: ProductFeatures
  tags: Tags
  stock_availables: StockAvailables
  attachments: Attachments
  accessories: Accessories
  product_bundle: ProductBundle
}

export interface Accessories {
  product: AttachmentClass
}

export interface AttachmentClass {
  id: string
}

export interface Attachments {
  attachment: AttachmentClass
}

export interface Categories {
  category: AttachmentClass
}

export interface Combinations {
  combination: AttachmentClass
}

export interface Images {
  image: AttachmentClass
}

export interface ProductBundle {
  product: ProductBundleProduct
}

export interface ProductBundleProduct {
  id: string
  id_product_attribute: string
  quantity: string
}

export interface ProductFeatures {
  product_feature: ProductFeature
}

export interface ProductFeature {
  id: string
  id_feature_value: string
}

export interface ProductOptionValues {
  product_option_value: AttachmentClass
}

export interface StockAvailables {
  stock_available: StockAvailable
}

export interface StockAvailable {
  id: string
  id_product_attribute: string
}

export interface Tags {
  tag: AttachmentClass
}

export interface AvailableLater {
  language: string[]
}
