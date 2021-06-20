import React from 'react'
import StyledInputName from './styles'

export default function InputName() {
    return (
        <StyledInputName>
            <label for="name" className="lbl-name style-lbl">Nome</label>
            <input type="text" name="name" id="name" required />
        </StyledInputName>
    )
}
