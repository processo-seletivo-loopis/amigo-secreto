import React from 'react'
import StyledInputName from './styles'

export default function InputName({name}) {
    return (
        <StyledInputName>
            <label htmlFor="name" className="lbl-name style-lbl">Nome</label>
            <input type="text" value={name} name="name" id="name" required />
        </StyledInputName>
    )
}
