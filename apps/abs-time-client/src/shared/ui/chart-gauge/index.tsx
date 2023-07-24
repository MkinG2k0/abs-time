import { WrapChart } from 'shared/ui/wrap-chart'

export const ChartGauge = () => {
	return <WrapChart {...config} type={'Gauge'} />
}

const config = {
	percent: 0.75,
	range: {
		color: '#30BF78',
	},
	indicator: {
		pointer: {
			style: {
				stroke: '#D0D0D0',
			},
		},
		pin: {
			style: {
				stroke: '#D0D0D0',
			},
		},
	},
	axis: {
		label: {
			formatter(v) {
				return Number(v) * 100
			},
		},
		subTickLine: {
			count: 3,
		},
	},
	statistic: {
		content: {
			formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
			style: {
				color: 'rgba(0,0,0,0.65)',
				fontSize: 48,
			},
		},
	},
}
