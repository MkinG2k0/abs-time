import { FC } from 'react'
import { ChartArea } from 'shared/ui/chart-area'
import { ChartColumn } from 'shared/ui/chart-column'
import { ChartGauge } from 'shared/ui/chart-gauge'
import { ChartPie } from 'shared/ui/chart-pie'
import { ChartRadar } from 'shared/ui/chart-radar'
import { ChartStep } from 'shared/ui/chart-step'

const Main: FC = ({}) => {
	return (
		<div className={'col '}>
			<ChartStep />
			{/*<ChartArea />*/}
			{/*<ChartColumn />*/}
			{/*<ChartPie />*/}
			{/*<ChartGauge />*/}
			{/*<ChartRadar />*/}
			{/*<WrapChart {...config} type={'Line'} />*/}
			{/*<WrapChart data={data} xField={'year'} yField={'value'} type={'Line'} />*/}
		</div>
	)
}

export default Main
