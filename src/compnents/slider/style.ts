import styled from 'styled-components'

export const SliderContainer = styled.div`
  input[type='range'] {
		-webkit-appearance: none;
		width: 1014px;
		height: 25px;
		cursor: pointer;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background: #171625;
		height: 10px;
		border-radius: 50px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 35px;
		width: 35px;
		background: #171625;
		border: 5px solid #b0affe;
		margin-top: -12px;
		border-radius: 50%;
	}
`
