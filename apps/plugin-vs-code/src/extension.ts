import { Core } from 'plugin-core'
import * as vscode from 'vscode'

import { VsCodeAdapter } from './vscode-adapter'

export function activate(ctx: vscode.ExtensionContext) {
	const adapter = new VsCodeAdapter(ctx)
	const core = new Core(adapter)

	const onChange = vscode.workspace.onDidChangeTextDocument((e) => {
		if (e.contentChanges.length === 1) {
			core.onChange({ path: e.document.fileName })
		}
	})

	ctx.subscriptions.push(onChange)
}

export function deactivate() {}
