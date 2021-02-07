import { requset } from "./requset";

export function getcategory () {
  return requset({
    url: '/category'
  })
}

export function getSubcategory (maitKey) {
  return requset({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}