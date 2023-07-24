// import { MenuItems } from 'entities/layout/config/menu'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return null
}

export const HeaderLoad = () => {
	return (
		<div className={'flex bg-gray-700 h-12 '}>
			<div
				className={'bg-gray-800 flex items-center justify-center w-20 flex-grow-0 flex-shrink-0'}
			></div>
		</div>
	)
}
