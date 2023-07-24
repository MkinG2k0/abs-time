import { testData } from 'pages/main/ui/page/test-data'
import { memo, useEffect, useMemo, useRef } from 'react'
import { uuid } from 'shared/lib/uuid'
import { selectType, TAllClass } from 'shared/ui/wrap-chart/config'
import { AllConfig } from 'shared/ui/wrap-chart/types'

export const WrapChart = memo((props: AllConfig) => {
	const { type, name, className, ...options } = props
	const refChart = useRef<TAllClass | null>(null)
	const id = useRef(`chart-${name || uuid()}`)

	useEffect(() => {
		if (props?.data) {
			refChart.current?.changeData(props.data)
		}
	}, [props?.data])

	useEffect(() => {
		if (refChart.current?.options) {
			// refChart.current.options = options
		}
	}, [props])

	useEffect(() => {
		const SelectClass = selectType[type]
		if (SelectClass && !refChart.current) {
			// @ts-ignore
			refChart.current = new SelectClass(id.current, options)
			refChart.current!.render()
		}

		// refChart.current?.options = options
		return () => {
			// refChart.current?.destroy?.()
		}
	}, [])

	return <div id={id.current} className={''.concat(className || '')} />
})
