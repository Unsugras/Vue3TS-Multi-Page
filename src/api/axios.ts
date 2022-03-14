
import axios from 'axios';
import { ElLoading } from 'element-plus'

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
        
        let loadingDOM:any = {}
        if(needLoading){
             loadingDOM = ElLoading.service({
                lock: true,
                text: '加载中',
                background: 'rgba(0, 0, 0, 0.7)',
            })
        }


        if(methods == 'GET'){
            return axios.get(url,{
                baseURL,
                params:params,
                headers:headers
            }).finally(()=>{
                if(needLoading)loadingDOM.close()
            })

        }else if(methods == 'POST'){
            return axios.post(url,params,{
                baseURL,
                headers
            }).finally(()=>{
                if(needLoading)loadingDOM.close()
            })
        }
}

export default {
    get: (
        url:string, 
        params:Object, 
        headers:any,
        needLoading:Boolean
    ) => {
        return myAxios('GET',url,params,headers,needLoading)
    },
    post: (
        url:string,
        params:Object,
        headers:any,
        needLoading:Boolean
    ) => {
        return myAxios('POST',url,params,headers,needLoading)
    }
};