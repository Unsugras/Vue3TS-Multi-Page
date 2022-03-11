import request from '../axios'

export default {
   templateRequest:(params:Object)=>request.get("/student",params,{},true),
}               