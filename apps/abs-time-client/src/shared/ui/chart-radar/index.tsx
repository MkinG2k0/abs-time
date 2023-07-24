import { WrapChart } from 'shared/ui/wrap-chart'

export const ChartRadar = () => {
	return <WrapChart {...config} type={'Radar'} />
}
const data = [
	{
		item: 'Design',
		user: 'a',
		score: 70,
	},
	{
		item: 'Design',
		user: 'b',
		score: 30,
	},
	{
		item: 'Development',
		user: 'a',
		score: 60,
	},
	{
		item: 'Development',
		user: 'b',
		score: 70,
	},
	{
		item: 'Marketing',
		user: 'a',
		score: 50,
	},
	{
		item: 'Marketing',
		user: 'b',
		score: 60,
	},
	{
		item: 'Users',
		user: 'a',
		score: 40,
	},
	{
		item: 'Users',
		user: 'b',
		score: 50,
	},
	{
		item: 'Test',
		user: 'a',
		score: 60,
	},
	{
		item: 'Test',
		user: 'b',
		score: 70,
	},
	{
		item: 'Language',
		user: 'a',
		score: 70,
	},
	{
		item: 'Language',
		user: 'b',
		score: 50,
	},
	{
		item: 'Technology',
		user: 'a',
		score: 50,
	},
	{
		item: 'Technology',
		user: 'b',
		score: 40,
	},
	{
		item: 'Support',
		user: 'a',
		score: 30,
	},
	{
		item: 'Support',
		user: 'b',
		score: 40,
	},
	{
		item: 'Sales',
		user: 'a',
		score: 60,
	},
	{
		item: 'Sales',
		user: 'b',
		score: 40,
	},
	{
		item: 'UX',
		user: 'a',
		score: 50,
	},
	{
		item: 'UX',
		user: 'b',
		score: 60,
	},
]

const config = {
	data,
	xField: 'item',
	yField: 'score',
	seriesField: 'user',
	meta: {
		score: {
			alias: '分数',
			min: 0,
			max: 80,
		},
	},
	xAxis: {
		line: null,
		tickLine: null,
		grid: {
			line: {
				style: {
					lineDash: null,
				},
			},
		},
	},
	yAxis: {
		line: null,
		tickLine: null,
		grid: {
			line: {
				type: 'line',
				style: {
					lineDash: null,
				},
			},
			alternateColor: 'rgba(0, 0, 0, 0.04)',
		},
	},
	area: {},
	point: {
		size: 2,
	},
}
