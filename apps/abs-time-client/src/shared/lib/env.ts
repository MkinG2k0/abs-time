export const getEnvVar = (key: string | keyof NodeJS.ProcessEnv) => {
	// console.log(process.env.VITE_PUBLIC_URL_ENDPOINT)
	// if (process.env[key] === undefined) {
	// 	throw new Error(`Env variable ${key} is required`)
	// }
	return import.meta.env[key] || ''
}
