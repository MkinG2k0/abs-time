import type { ResRefresh, ReqRefresh, ReqLogin, ResLogin } from './auth'

import { http } from 'shared/config/axios'

const login = (data: ReqLogin): AxiosReqWrap<ResLogin> => http.post('login', data)

const refresh = (data: ReqRefresh): AxiosReqWrap<ResRefresh> => http.post('login/refresh', data)

export const RAuth = {
	login,
	refresh,
}
