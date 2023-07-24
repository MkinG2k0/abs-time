import { RouteParams } from 'atomic-router'
import { Link, LinkProps } from 'atomic-router-react'

export interface NavBtnProps<Params extends RouteParams>
	extends Pick<LinkProps<Params>, 'to' | 'params'> {
	classNameBtn?: string
	className?: string
}

export const NavBtn = <T extends RouteParams>({
	children,
	to,
	params,
	className,
	classNameBtn,
	...props
}: PropsWithChildren<NavBtnProps<T>>) => {
	return (
		<Link to={to} params={params} className={className}>
			<button {...props} className={classNameBtn}>
				{children}
			</button>
		</Link>
	)
}
