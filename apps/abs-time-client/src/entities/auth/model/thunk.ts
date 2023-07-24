import { createAsyncThunk } from '@reduxjs/toolkit'

import { ReqLogin, ResLogin, ResRefresh, ReqRefresh } from 'entities/auth/api/auth'
import { RAuth } from 'entities/auth'

export const fetchLogin = createAsyncThunk<ResLogin, ReqLogin, { rejectValue: string }>(
	'fetch/auth/login',
	async (login) => {
		const data = await RAuth.login(login)

		return data.data.data
	},
)

export const fetchRefresh = createAsyncThunk<
	ResRefresh,
	ReqRefresh,
	{
		rejectValue: any
	}
>('fetch/auth/refresh', async (refreshToken, { getState, rejectWithValue }) => {
	const token = (getState() as RootState).auth.auth.data?.token || ''
	let data

	if (token) {
		data = await RAuth.refresh({ token })
	} else {
		rejectWithValue('err')
		return undefined
	}
	// TODO brain
	return data.data.data
})
