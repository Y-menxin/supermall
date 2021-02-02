import { requset } from "./requset";
export function getDetail (iid) {
  return requset({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend () {
  return requset({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}