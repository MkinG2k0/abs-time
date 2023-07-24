import { PersistGate } from 'redux-persist/integration/react'

import { persist } from '../store/config'

export const WithPersist = (component: FC) => (props) => {
	return (
		<PersistGate persistor={persist} loading={null}>
			{component(props)}
		</PersistGate>
	)
}
