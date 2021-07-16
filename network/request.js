import axios from 'axios'

function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    method: 'get',
    timeout: 5000,
  });
  instance.interceptors.request.use((config) => {
    //1.config中的信息不合规范
    //2.发送请求时，希望在界面显示加载图标
    //3.网络请求需要一些特殊的参数，例如token
    // config.timeout = 10000
    return config
  }, (err) => {
    console.log(err);
  });
  instance.interceptors.response.use((response) => {
    return response.data
  }, (err) => {
    console.log(err);
  })
  return instance(config)
  
}

export {
  request,

}