import { App, ConfigProvider, theme } from 'antd'
import 'core/styles/theme.scss'
import 'core/styles/index.scss'

export const WithAntd = (component: FC) => (props) =>
	(
		<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
			<App>{component(props)}</App>
		</ConfigProvider>
	)
