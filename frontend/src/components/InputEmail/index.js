import React from 'react'
import StyledInputEmail from './styles'

export default function InputEmail({email, onChangeEmail}) {

    const handleChange = (event) => {
        const { value } = event.target;
        onChangeEmail(value);
    }

    return (
        <StyledInputEmail>
            <label htmlFor="email" className="lbl-email style-lbl">Email</label>
            <input type="email" onChange={handleChange} value={email} name="email" id="email" required />
        </StyledInputEmail>
    )
}
