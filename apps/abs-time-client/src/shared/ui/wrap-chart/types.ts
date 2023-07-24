import { Column, Gauge, Line, Pie, Radar } from '@antv/g2plot'
import { PickOptions, Plot } from '@antv/g2plot/src/core/plot'
import { selectType, TAllClass, TKeySelect } from 'shared/ui/wrap-chart/config'

export interface WrapChart<T extends TKeySelect> {
	type: T
	name?: string
	className?: string
	ref?: React.MutableRefObject<TAllClass | null>
	// onGetRef?: (ref: TAllClass | null) => void
}

export interface WrapConfig<T> {
	config: T
}

// type Part<T extends { options: object }> = Partial<T> & Required<Pick<T, 'options'>>
// type Part<T extends { data: any[] }> =
// 	| T
// 	| {
// 			xField: keyof T['data'][number]
// 			xYield: keyof T['data'][number]
// 	  }

type Part<T extends { options: object }> = T['options']

export type TLine = WrapChart<'Line'> & Part<Line>
export type TColumn = WrapChart<'Column'> & Part<Column>
export type TCirclePacking = WrapChart<'CirclePacking'> & Part<Column>
export type TPie = WrapChart<'Pie'> & Part<Pie>
export type TGauge = WrapChart<'Gauge'> & Part<Gauge> & { data: any[] }
export type TRadar = WrapChart<'Radar'> & Part<Radar>

export type AllConfig = TLine | TColumn | TCirclePacking | TPie | TGauge | TRadar
