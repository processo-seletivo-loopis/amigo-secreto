import React from 'react'
import StyledButton from './styles'

export default function Button({position_size,text}) {
    return (
        <StyledButton position_size={position_size}>{text}</StyledButton>
    )
}
