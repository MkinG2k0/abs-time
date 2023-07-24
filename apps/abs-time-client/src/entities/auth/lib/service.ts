import { dispatch } from 'core/store'
import { RAuth, AuthSlice } from 'entities/auth'
import { ReqLogin, ResLogin, ResRefresh, ReqRefresh } from 'entities/auth/api/auth'

export const authService = {
	login: (loginRequest: ReqLogin): Promise<ResLogin> => {
		return RAuth.login(loginRequest)
			.then(({ data }) => {
				dispatch(AuthSlice.setToken(data.data.token))
				return data
			})
			.catch(({ response }) => {
				return response.data
			})
	},

	refresh: (): Promise<ResRefresh> => {
		return RAuth.refresh({})
			.then(({ data }) => {
				const token = data.data.token

				if (token) {
					dispatch(AuthSlice.setToken(data.data.token))
				} else {
					// TODO Next nav
					// navHistory.push(NAV.AUTH)
				}

				return data
			})
			.catch(({ response }) => {
				return response.data
			})
	},

	logOut: () => {
		dispatch(AuthSlice.removeToken())
	},
}
