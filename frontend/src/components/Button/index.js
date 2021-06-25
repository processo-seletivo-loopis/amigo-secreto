import React from 'react'
import StyledButton from './styles'

export default function Button({ position_size, text, onClick }) {

    const handleClick = () => {
        onClick();
    }

    return (
        <StyledButton onClick={handleClick} position_size={position_size}>{text}</StyledButton>
    )
}
