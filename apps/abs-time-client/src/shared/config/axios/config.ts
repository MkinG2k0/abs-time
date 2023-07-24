export const AxiosConfig = {
	baseURL: import.meta.env.VITE_PUBLIC_URL_ENDPOINT,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
}
