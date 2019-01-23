import {post, get} from './api'

/**
 * 后台接口
 */
export default {
  admin: {
    /**
     * 后台接口
     */
    // 登陆
    apiAdminLogin: (data) => post('/...', data),

  },
  webview: {
    /**
     * 前台接口
     */
  }
}
