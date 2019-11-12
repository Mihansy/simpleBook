import axios from 'axios'

//开发时的请求数据地址跟上线地址有可能不相同时
//const isDev = process.env.NODE_ENV === 'development'

const ajax = axios.create({
	baseURL: 'http://rap2api.taobao.org/app/mock/236238/' 
	//baseURL:isDev ? '开发环境地址': '上线后的地址'
})

export const findList = (obj) => {
	return ajax.get('fineList',{
		params: {
			page: obj.page,
			count: obj.count
		}
	})
}

export const authorList = (count) => {
	return ajax.get('author',{
		params: {
			count: count
		}
	})
}