import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons'
import { Button, Layout as WrapLayout, Menu, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { CSSProperties, useState } from 'react'
const items = [
	{
		key: '1',
		icon: <UserOutlined />,
		label: 'nav 1',
	},
	{
		key: '2',
		icon: <VideoCameraOutlined />,
		label: 'nav 2',
	},
	{
		key: '3',
		icon: <UploadOutlined />,
		label: 'nav 3',
	},
]

export const Layout: FC = ({ children }) => {
	const [collapsed, setCollapsed] = useState(true)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const wrapStyle = { '--color-bg': colorBgContainer } as CSSProperties

	return (
		<div className={'col h-[100vh] bg-[var(--color-bg)] overflow-x-hidden'} style={wrapStyle}>
			<div className={'row justify-between items-center bg-[var(--color-bg)] px-6 h-14'}>
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
				/>
			</div>
			<div className={'row grow'}>
				<Sider trigger={null} collapsible collapsed={collapsed} className={'w-full '}>
					<Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
				</Sider>
				<Content
					className={'bg-[var(--color-step-100)] p-3 overflow-x-auto h-[calc(100vh-56px)] grow'}
				>
					{children}
				</Content>
			</div>
		</div>
	)
}
