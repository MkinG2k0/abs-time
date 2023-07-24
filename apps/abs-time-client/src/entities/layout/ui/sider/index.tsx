import { FC } from 'react'

import { LayoutSlice } from 'entities/layout'

// import { MenuItems } from 'entities/layout/config/menu'

interface SiderProps {}

export const Sider: FC<SiderProps> = ({}) => {
	const { sideCollapsed } = LayoutSlice.useGet()

return null
}

export const SiderLoad: FC = () => {
	return <div className={'bg-gray-900 w-20'}></div>
}
