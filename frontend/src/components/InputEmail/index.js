import React from 'react'
import StyledInputEmail from './styles'

export default function InputEmail({email}) {
    return (
        <StyledInputEmail>
            <label htmlFor="email" className="lbl-email style-lbl">Email</label>
            <input type="email" value={email} name="email" id="email" required />
        </StyledInputEmail>
    )
}
