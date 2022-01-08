import styled from 'styled-components'

export const Button = styled.button`
	/* outline: none; */
	border: none;
	background: none;
	font-size: 16px;
	color: #b0affe;
	cursor: pointer;
	transition: color 0.3s ease-out;

	&:hover,
	&:focus {
		color: #ffff;
	}

	.active {
		color: #ffff;
	}
`
