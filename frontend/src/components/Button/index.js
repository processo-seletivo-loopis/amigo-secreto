import React from 'react'
import StyledButton from './styles'

export default function Button({position,text}) {
    return (
        <StyledButton position={position}>{text}</StyledButton>
    )
}
