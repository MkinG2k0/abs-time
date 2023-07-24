import { FC } from 'react'

import { NavBtn } from 'shared'
import { tabsRoute } from 'shared/config/routing'

interface authProps {}

const Auth: FC<authProps> = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center '}>
			<div className={'col justify-center items-center w-80'}>
				<div className={'row  w-full'}>
					<NavBtn className={'flex-auto'} classNameBtn={'w-full'} to={tabsRoute}>
						Register
					</NavBtn>
					<NavBtn className={'flex-auto'} classNameBtn={'w-full'} to={tabsRoute}>
						Login
					</NavBtn>
				</div>
			</div>
		</div>
	)
}

export default Auth
