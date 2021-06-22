import React from 'react'
import StyledButton from './styles'

export default function ButtonAddHome({position_size}) {

    const handleClick = () => {};

    return (
        <StyledButton position_size={position_size} onClick={handleClick}>
            ADICIONAR
        </StyledButton>
    )
}