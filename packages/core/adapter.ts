// eslint no-unused-vars: 0
import { ITrace } from './interface'

export abstract class Adapter {
	async setState(key: string, data: any) {}

	getState<T = any>(key: string): T {
		return undefined as any
	}

	getProjectName() {
		return ''
	}

	fetchData(data: ITrace[]) {}
}
