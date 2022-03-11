
import axios from 'axios';

// 默认设置
axios.defaults.timeout = 30 * 1000;
const baseURL = '/';
// http请求拦截器
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// http响应拦截器
axios.interceptors.response.use(response => {
    console.info(response)
    return response.data
}, error => {
    return Promise.reject(error);
});


const myAxios = (
    methods:string,
    url:string,
    params:Object,
    headers:any,
    needLoading:Boolean) =>{

        console.info(needLoading?'需要Loading':'不需要Loading')

        if(methods == 'GET'){
            return axios.get(url,{
                baseURL,
                params:params,
                headers:headers
            })

        }else if(methods == 'POST'){
            return axios.post(url,params,{
                baseURL,
                headers
            })
        }
}

export default {
    get: (url:string, params:Object, headers:any,needLoading:Boolean) => {
        return myAxios('GET',url,params,headers,needLoading)
    },
    post: (url:string, params:Object, headers:any,needLoading:Boolean) => {
        return myAxios('POST',url,params,headers,needLoading)
    }
};