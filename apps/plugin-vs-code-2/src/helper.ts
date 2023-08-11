
export const clearState = (state) => {
	state.keys().map((item) => {
		state.update(item, undefined)
	})
}

