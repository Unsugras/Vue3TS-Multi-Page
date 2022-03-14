
import request from '../axios'

export default {
  HelloWorld_GetRequest:(params:Object)=>request.get("/get",params,{},true),
  HelloWorld_PostRequest:(params:Object)=>request.post("/post",params,{},true)
}               
