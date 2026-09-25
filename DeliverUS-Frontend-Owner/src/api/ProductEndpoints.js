import { get } from './helpers/ApiRequestsHelper'

function getProductCategories() {
  return get('productCategories/')
}

function create(values) {
  return post('products', values)
}

export { getProductCategories, create }
