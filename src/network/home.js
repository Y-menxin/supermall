import { requset } from './requset'

export function getHomeMultidata () {
  return requset({
    url: '/home/multidata'
  })
}

export function getHomrGoods (type, page) {
  return requset({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}
