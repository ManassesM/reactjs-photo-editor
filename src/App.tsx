import React, { useState } from 'react'
import { Effect } from './compnents/effect/Effect'
import { Slider } from './compnents/slider'

import * as S from './style'

const DEFAULT_OPTIONS = [
	{
		name: 'Brightness',
		property: 'brightness',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	},
	{
		name: 'Contrast',
		property: 'contrast',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	},
	{
		name: 'Saturation',
		property: 'saturate',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	},
	{
		name: 'Grayscale',
		property: 'grayscale',
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: '%',
	},
	{
		name: 'Sepia',
		property: 'sepia',
		value: 0,
		range: {
			min: -100,
			max: 100,
		},
		unit: '%',
	},
	{
		name: 'Hue Rotate',
		property: 'hue-rotate',
		value: 0,
		range: {
			min: 0,
			max: 360,
		},
		unit: 'deg',
	},
	{
		name: 'Blur',
		property: 'blur',
		value: 0,
		range: {
			min: 0,
			max: 20,
		},
		unit: 'px',
	},
]

function App() {
	const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)
	const [options, setOptions] = useState(DEFAULT_OPTIONS)

	const selectedOption = options[selectedOptionIdx]

	function handleSliderChange({ target }: any) {
		setOptions((prevOptions) =>
			prevOptions.map((opt, idx) => {
				if (idx !== selectedOptionIdx) return opt
				return { ...opt, value: target.value }
			})
		)
	}

	function getImageStyle() {
		const filters = options.map(
			(opt) => `${opt.property}(${opt.value}${opt.unit})`
		)

		return { filter: filters.join(' ') }
	}

	return (
		<div className='App'>
			<S.Container>
				<S.Picture>
					<img
						style={getImageStyle()}
						src='https://picsum.photos/900/700'
						alt=''
					/>
				</S.Picture>
				<S.Effects>
					{options.map((opt, idx) => (
						<Effect
							key={idx}
							name={opt.name}
							active={idx === selectedOptionIdx}
							handleClick={() => setSelectedOptionIdx(idx)}
						/>
					))}
				</S.Effects>
				<S.Slider>
					<Slider
						min={selectedOption.range.min}
						max={selectedOption.range.max}
						value={selectedOption.value}
						handleChange={handleSliderChange}
					/>
				</S.Slider>
			</S.Container>
		</div>
	)
}

export default App
