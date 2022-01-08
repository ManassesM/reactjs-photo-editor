import React from 'react'

import * as S from './style'

interface EffectProps {
	name: string
	active: boolean
	handleClick: any
}

export const Effect = ({ name, active, handleClick }: EffectProps) => {
	return (
		<S.Button
			className={`sidebar-item ${active && 'active'} `}
			onClick={handleClick}
		>
			{name}
		</S.Button>
	)
}
