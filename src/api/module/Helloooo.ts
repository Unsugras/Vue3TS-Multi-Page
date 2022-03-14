
import request from '../axios'

export default {
  Helloooo_GetRequest:(params:Object)=>request.get("/get",params,{},true),
  Helloooo_PostRequest:(params:Object)=>request.post("/post",params,{},true)
}               
