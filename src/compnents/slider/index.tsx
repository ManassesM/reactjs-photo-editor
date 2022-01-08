import React from 'react'

import * as S from './style'

interface SliderProps {
	min: number
	max: number
	value?: number
	handleChange?: any
}

export const Slider = ({ min, max, value, handleChange }: SliderProps) => {
	return (
		<S.SliderContainer>
			<input
				type='range'
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</S.SliderContainer>
	)
}
