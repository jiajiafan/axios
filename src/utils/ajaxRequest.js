import axios from 'axios'
import {Toast} from 'cube-ui'

class AjaxRequest{
    constructor() {
        this.baseURL = process.env.NODE_ENV !== 'production' ? 'http:localhost:3000/api' : '/';
        this.timeout = 3000;
        this.method = 'get'; 
        this.toast = Toast.$create({
            txt: 'Loading...',
            mask: false,
            time:0
        })
        this.queue = {}
    }
    setInterceptor(instance, url) {
        instance.interceptor.request.use(config => {
            // 显示loading；
            // 请求拦截
            if (Object.keys(this.queue).length === 0) {
                this.toast.show()
            }
            this.queue[url] = url;
            return config;
        }, err => {
                return Promise.reject(err)
        })
        instance.interceptor.response.use(res => {
            delete this.queue[url];
             if (Object.keys(this.queue).length === 0) {
                  this.toast.hide()
             }
            // 对返回的状态码做各种匹配；
            if (res.data.code === 0) {
                return res.data.data;
            }
            // 响应拦截
            
        }, err => {
            return Promise.reject(err)
        })
    }
    request(options) {
        let instance = axios.create();
        let config = {
            ...options,
            method: this.method,
            timeout: this.timeout,
            baseURL:this.baseURL
        }
        this.setInterceptor(instance,options.url)
        return instance(config)
    }
}
export default new AjaxRequest() 