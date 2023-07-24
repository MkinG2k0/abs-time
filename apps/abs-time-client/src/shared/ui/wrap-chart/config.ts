import { Column, Line, CirclePacking, Pie, Gauge, Radar } from '@antv/g2plot'

export const selectType = {
	Line,
	Column,
	CirclePacking,
	Pie,
	Gauge,
	Radar,
}
export type TSelectType = typeof selectType
export type TKeySelect = keyof TSelectType
export type TAllClass = Line | Column | CirclePacking | Pie | Gauge | Radar
// export type TTT = Record<TKeySelect, TSelectType[TKeySelect]['options']>
// export type TTT = {
// 	[P in TKeySelect]: TSelectType[P]['']
// }
