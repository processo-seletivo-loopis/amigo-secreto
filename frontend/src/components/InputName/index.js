import React from 'react'
import StyledInputName from './styles'

export default function InputName({ name, onChangeName }) {

    const handleChange = (event) => {
        const { value } = event.target;
        onChangeName(value);
    }

    return (
        <StyledInputName>
            <label htmlFor="name" className="lbl-name style-lbl">Nome</label>
            <input type="text" onChange={handleChange} value={name} name="name" id="name" required />
        </StyledInputName>
    )
}
