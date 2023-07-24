import { theme } from 'antd'

export const WithTheme = (component: FC) => (props) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<div
			// @ts-ignore
			className={'col flex-auto dark-theme'}
		>
			{component(props)}
		</div>
	)
}
