/**
 * axios的二次封装
 */
import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'
var serverIp = ''
if (process.env.NODE_ENV === 'development') {
  // 测试环境
  axios.defaults.baseURL = 'http://' + serverIp + ':8080/adminAPI'
} else if (process.env.NODE_ENV === 'debug') {

} else if (process.env.NODE_ENV === 'production') {
  // 线上环境
  axios.defaults.baseURL = ''
}

axios.defaults.timeout = 10000

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    if (sessionStorage.token) {
      config.headers.token = sessionStorage.token
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      console.log(error)
      switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作
        case 401 :
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Message.error('登录过期，请重新登录')
          // 清除token
          localStorage.removeItem('token');
          // store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break
        // 404请求不存在
        case 404:
          Message.error('网络请求不存在')
          break
        // 其他错误，直接抛出错误提示
        default:
          Message.warning( error.response.data.message)
      }
      return Promise.reject(error.response)
    }
  })

/**
 * @param res返回数据列表
 */
function handleResults (res) {
  var resData = res.data
  var results = {
    success: false,
    message: '',
    status: [],
    errorCode: '',
    data: {
      total: 0,
      results: ''
    }
  }

  if (resData.success) {
    results.data.results = resData.data
    results.data.total = resData.total
  } else {
    console.log(resData.errorCode)
    // 响应拦截

    // 有请求回来的情况
    let code = resData.errorCode
    // token 过期
    results.errorCode = resData.errorCode
    results.message = resData.message
  }
  return results
}

/**
 * 请求接口url
 */
function handleUrl (url) {
  var urls = BASE_URL + url
  return urls
}

/**
 * @param data数据列表
 * @return
 */
function handleParams (data) {
  return data
}
/**
 * @url
 * @response 正常的回调
 * @data
 * @exception 异常的回调函数
 */

export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(
      url,
      qs.stringify(data)
    ).then((res) => {
      console.log(res)
      handleResults(res)
      resolve(handleResults(res))
    }).catch((error) => {
    //    if(exception){
    //        exception
    //    }
      handleResults(error)
      reject(error)
    })
  })
}
/**
* @param {} url
* @param {*} data
* get参数为对象{},对象参数params值为参数对象
*/
export function get (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(
      url,
      {params: handleParams(data)}
    ).then((res) => {
      console.log(res)
      resolve(handleResults(res))
    }).catch((error) => {
      console.log('ffff')
      reject(error)
    })
  })
}
