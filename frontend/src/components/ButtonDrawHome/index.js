import React from 'react'
import StyledButton from './styles'

export default function ButtonDrawHome({position_size}) {

    const handleClick = () => {};

    return (
        <StyledButton position_size={position_size} onClick={handleClick}>
            SORTEAR
        </StyledButton>
    )
}