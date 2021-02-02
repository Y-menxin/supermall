import axios from 'axios'
export function requset (config) {
  // 创建 axios  的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    // baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  })
  // axios 拦截器 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // axios 拦截器 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}
