import fetch from 'node-fetch'
import { Adapter, ITrace } from 'plugin-core'
import * as vscode from 'vscode'
import { FETCH_URL, KEY_TRACE } from './const-evn'

export class VsCodeAdapter extends Adapter {
	constructor(public ctx: vscode.ExtensionContext) {
		super()
	}

	async setState(key: string, data: any) {
		return  this.ctx.workspaceState.update(key, data)
	}

	getState<T>(key: string) {
		return this.ctx.workspaceState.get<T>(key)
	}

	getProjectName() {
		return vscode.workspace.name || ''
	}

	async fetchState(trace: ITrace[]) {
		const state = this.getState<ITrace[]>(KEY_TRACE) || []
		if (trace.length === 0) return

		const data = await fetch(FETCH_URL, {
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(trace),
			method: 'POST',
		})
			.then((data) => {
				this.setState(KEY_TRACE, [])
				return data.json()
			})
			.catch((err) => {
				this.setState(KEY_TRACE, [...state, ...trace])
				return err
			})

		console.log(data, trace)
	}
}
