import { WrapChart } from 'shared/ui/wrap-chart'

export const ChartStep = () => {
	return <WrapChart {...config} type={'Line'} />
}

export const stepData = [
	{ month: 'Jan', key: 'series1', value: 125 },
	{ month: 'Jan', key: 'series2', value: 51 },
	{ month: 'Feb', key: 'series1', value: 132 },
	{ month: 'Feb', key: 'series2', value: 91 },
	{ month: 'Mar', key: 'series1', value: 141 },
	{ month: 'Mar', key: 'series2', value: 34 },
	{ month: 'Apr', key: 'series1', value: 158 },
	{ month: 'Apr', key: 'series2', value: 47 },
	{ month: 'May', key: 'series1', value: 133 },
	{ month: 'May', key: 'series2', value: 63 },
	{ month: 'June', key: 'series1', value: 143 },
	{ month: 'June', key: 'series2', value: 58 },
	{ month: 'July', key: 'series1', value: 176 },
	{ month: 'July', key: 'series2', value: 56 },
	{ month: 'Aug', key: 'series1', value: 194 },
	{ month: 'Aug', key: 'series2', value: 77 },
	{ month: 'Sep', key: 'series1', value: 115 },
	{ month: 'Sep', key: 'series2', value: 99 },
	{ month: 'Oct', key: 'series1', value: 134 },
	{ month: 'Oct', key: 'series2', value: 106 },
	{ month: 'Nov', key: 'series1', value: 110 },
	{ month: 'Nov', key: 'series2', value: 88 },
	{ month: 'Dec', key: 'series1', value: 91 },
	{ month: 'Dec', key: 'series2', value: 56 },
]

const config = {
	data: stepData,
	xField: 'month',
	yField: 'value',
	legend: false,
	seriesField: 'key',
	stepType: 'hvh',
	tooltip: {
		showMarkers: false,
		enterable: true,
		domStyles: {
			'g2-tooltip': {
				width: '150px',
				padding: 0,
			},
		},
		customContent: (month, arr) => {
			const strArr = arr.map(({ title, value }) => `${title}: ${value}`).join('<br/>')
			return `<div class="p-2">${month} <div>${strArr}</div>`
		},
	},
} as any
