import { useStore } from 'shared'

const useGet = () => useStore((state) => state['File-Name'])

export const FileNameHooks = {
	useGet,
}
