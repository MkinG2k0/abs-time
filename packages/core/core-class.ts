import { ITrace } from './interface'
import { INTERVAL_FETCH, SPLIT_MAX_TIME, SPLIT_MIN_TIME } from './constant'
import { Adapter } from './adapter'

export interface IChange {
	path: string
}

export class Core {
	trace: ITrace[] = []

	constructor(private adapter: Adapter) {
		this.fetchIntervalState()
	}

	async onChange(change: IChange) {
		const dateNow = Date.now()
		const filePath = change.path
		const lastTrace = this.trace.at(-1)
		const { path, time = dateNow } = lastTrace || {}
		const rangeTime = dateNow - time // разница между текущим временем и последним записанным
		const validMaxRange = rangeTime < SPLIT_MAX_TIME // записываем ли изменения
		const validMinRange = rangeTime > SPLIT_MIN_TIME // записываем ли изменения
		const equalFile = path === filePath // тот же ли сейчас файл
		const project = this.adapter.getProjectName()

		console.log('trace', this.trace, validMaxRange, equalFile)

		// если перешли в другой файл
		if (!equalFile) {
			this.trace.push({ project, path: filePath, time: dateNow })
			return
		}

		// если попадает в диапазон максимального и минимального времени
		if (validMinRange && validMaxRange) {
			this.trace.push({ project, path: filePath, time: dateNow })
		} else if (validMinRange && !validMaxRange) {
			const addMinTime = time + SPLIT_MIN_TIME
			this.trace.push({ project, path: filePath, time: addMinTime })
		}
	}

	async fetchIntervalState() {
		const interval = setInterval(async () => {
			this.adapter.fetchData(this.trace)
		}, INTERVAL_FETCH)
	}
}
